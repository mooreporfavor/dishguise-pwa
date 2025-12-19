import React, { useState, useRef, useEffect } from 'react';
import { AppState, GamePhase, RoundData, Difficulty, GameResult, DailyProgress, GameMode, UserProfile, DishStamp } from './types';
import { getGameRound } from './services/gameService';
import { PhaseIndicator } from './components/PhaseIndicator';
import { IngredientsBoard } from './components/IngredientsBoard';
import { ChefPantry } from './components/ChefPantry';
import { DishCard } from './components/DishCard';
import { LogoIntro } from './components/LogoIntro';
import { AdBanner, AffiliateButton } from './components/Monetization';
import { RecipeHandoff } from './components/RecipeHandoff';
import { CulinaryPassport } from './components/CulinaryPassport';
import { TutorialOverlay } from './components/TutorialOverlay';
import { AdminConsole } from './components/AdminConsole';
import { GameOverScreen } from './components/GameOverScreen';
import { logEvent, EVENTS } from './services/analytics';
import { SFX } from './services/soundService';
import { CheckCircle2, Play, Utensils, ChefHat, Menu as MenuIcon, Timer, Cigarette, Sparkles, LogOut, User, AlertTriangle, ArrowDown, ArrowRight } from 'lucide-react';

const ROUNDS_PER_DAY = 5;
const MAX_ROUND_SCORE = 5000;
const APP_URL = "https://dishguise.com";

// --- CULINARY LOADING MESSAGES ---
const LOADING_MSGS = [
    "Sharpening the knives...",
    "Yelling at the dishwasher...",
    "Finding the lamb sauce...",
    "Preheating the oven...",
    "Deglazing the servers...",
    "Organizing the walk-in...",
    "Taste testing...",
    "86-ing the errors...",
    "Firing the main course...",
    "Plating up...",
    "Wiping down the pass...",
    "Checking the prep list..."
];

// --- PROGRESSION TITLES ---
// --- PROGRESSION TITLES ---
const getTitle = (level: number) => {
    if (level < 5) return "Dishwasher"; // Day 1-2
    if (level < 15) return "Commis Chef"; // Week 1
    if (level < 30) return "Chef de Partie"; // Month 1
    if (level < 50) return "Sous Chef"; // Month 2
    if (level < 75) return "Chef de Cuisine"; // Month 4
    return "Executive Chef"; // Lvl 75+ (Requires significant play)
};

// Logarithmic/Square Root curve: Harder to level up as you go.
// 20k XP = Lvl 6. 100k XP = Lvl 15. 1M XP = Lvl 45.
const calculateLevel = (xp: number) => Math.floor(Math.sqrt(xp / 500)) + 1;

const getRandomLoadingMsg = () => LOADING_MSGS[Math.floor(Math.random() * LOADING_MSGS.length)];

// --- Confetti ---
const Confetti = () => {
    const pieces = Array.from({ length: 40 });
    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {pieces.map((_, i) => (
                <div
                    key={i}
                    className="confetti"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        backgroundColor: ['#eebb4d', '#ff6b6b', '#4ade80', '#ffffff'][Math.floor(Math.random() * 4)]
                    }}
                />
            ))}
        </div>
    );
};

// --- Penalty Float Animation ---
interface Penalty {
    id: number;
    amount: number;
    x: string;
    y: string;
}

const App: React.FC = () => {
    const [showIntro, setShowIntro] = useState(true);
    const [appState, setAppState] = useState<AppState>(AppState.MENU);
    const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.MEDIUM);
    const [gameMode, setGameMode] = useState<GameMode>('DETECTIVE');

    // Progress
    const [dailyProgress, setDailyProgress] = useState<DailyProgress>(() => {
        const saved = localStorage.getItem('dishguise_progress_v2');
        return saved ? JSON.parse(saved) : {};
    });

    // User Profile
    const [userProfile, setUserProfile] = useState<UserProfile>(() => {
        const saved = localStorage.getItem('dishguise_profile_v1');
        const defaultProfile = {
            xp: 0,
            level: 1,
            title: "Dishwasher",
            dishHistory: [],
            collection: [],
            stats: {
                gamesPlayed: 0,
                perfectGames: 0,
                currentStreak: 0,
                maxStreak: 0,
                lastPlayedDate: null
            }
        };

        if (!saved) return defaultProfile;

        const parsed = JSON.parse(saved);
        // Migration for old profiles without stats
        if (!parsed.stats) {
            parsed.stats = defaultProfile.stats;
        }
        return parsed;
    });

    // Tutorial State
    const [seenTutorials, setSeenTutorials] = useState<{ DETECTIVE: boolean, CHEF: boolean }>(() => {
        const saved = localStorage.getItem('dishguise_tutorials');
        return saved ? JSON.parse(saved) : { DETECTIVE: false, CHEF: false };
    });

    const [showTutorial, setShowTutorial] = useState(false);
    const [tutorialJustFinished, setTutorialJustFinished] = useState(false);
    const [showAdmin, setShowAdmin] = useState(false);

    // Game State
    const [roundNumber, setRoundNumber] = useState(1);
    const [totalScore, setTotalScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [gameResult, setGameResult] = useState<GameResult | null>(null);

    // Round State
    const [phase, setPhase] = useState<GamePhase>(GamePhase.PLAYING);
    const [currentRoundData, setCurrentRoundData] = useState<RoundData | null>(null);
    const [roundCache, setRoundCache] = useState<Record<string, RoundData>>({});
    const [roundScore, setRoundScore] = useState(MAX_ROUND_SCORE);

    // Visual Effects
    const [penalties, setPenalties] = useState<Penalty[]>([]);
    const [intermissionTimer, setIntermissionTimer] = useState(3);
    const [isConfirmingAbort, setIsConfirmingAbort] = useState(false);
    const [adminClickCount, setAdminClickCount] = useState(0);

    // Detective Mode Specifics
    const [wrongGuesses, setWrongGuesses] = useState<Set<string>>(new Set());
    const [crossedOutOptions, setCrossedOutOptions] = useState<Set<string>>(new Set());
    const [correctOptionId, setCorrectOptionId] = useState<string | null>(null);

    // Chef Mode Specifics
    const [foundIngredientIds, setFoundIngredientIds] = useState<Set<string>>(new Set());
    const [wrongIngredientIds, setWrongIngredientIds] = useState<Set<string>>(new Set());

    // Common Reveals
    const [revealedIngredientsCount, setRevealedIngredientsCount] = useState(1);
    const [revealedTriviaCount, setRevealedTriviaCount] = useState(0);
    const [flagRevealed, setFlagRevealed] = useState(false);
    const [countryRevealed, setCountryRevealed] = useState(false);

    const [showConfetti, setShowConfetti] = useState(false);
    const [loadingMsg, setLoadingMsg] = useState("Checking Prep List...");

    const resultsRef = useRef<HTMLDivElement>(null);

    // Persist Profile
    useEffect(() => {
        localStorage.setItem('dishguise_profile_v1', JSON.stringify(userProfile));
    }, [userProfile]);

    // Persist Tutorials
    useEffect(() => {
        localStorage.setItem('dishguise_tutorials', JSON.stringify(seenTutorials));
    }, [seenTutorials]);

    // Auto-scroll to results when revealed
    useEffect(() => {
        if (phase === GamePhase.REVEAL) {
            const timer = setTimeout(() => {
                resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [phase]);

    // Intermission Timer Logic
    useEffect(() => {
        if (appState === AppState.INTERMISSION) {
            setIntermissionTimer(3);
            const interval = setInterval(() => {
                setIntermissionTimer(prev => Math.max(0, prev - 1));
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [appState]);

    // SECRET ADMIN TRIGGER
    const handleProfileClick = () => {
        setAdminClickCount(prev => {
            if (prev + 1 >= 5) {
                setShowAdmin(true);
                return 0;
            }
            return prev + 1;
        });
        setAppState(AppState.PROFILE);
    };

    const saveProgress = (dayId: string) => {
        const newProgress = { ...dailyProgress, [dayId]: true };
        setDailyProgress(newProgress);
        localStorage.setItem('dishguise_progress_v2', JSON.stringify(newProgress));
    };

    const getCompletedCount = (diff: Difficulty, mode: GameMode) => {
        const today = new Date().toISOString().split('T')[0];
        let count = 0;
        for (let i = 1; i <= ROUNDS_PER_DAY; i++) {
            const key = `${today}-${diff}-${mode}-${i}`;
            if (dailyProgress[key]) count++;
        }
        return count;
    };

    const generateDayId = (diff: Difficulty, mode: GameMode, round: number) => {
        const today = new Date().toISOString().split('T')[0];
        return `${today}-${diff}-${mode}-${round}`;
    };

    const triggerPenalty = (amount: number) => {
        const id = Date.now();
        setPenalties(prev => [...prev, { id, amount, x: '50%', y: '50%' }]);
        setTimeout(() => {
            setPenalties(prev => prev.filter(p => p.id !== id));
        }, 1000);
    };

    const handleAbortService = () => {
        if (isConfirmingAbort) {
            setAppState(AppState.MENU);
            setIsConfirmingAbort(false);
        } else {
            setIsConfirmingAbort(true);
            // Auto reset after 3 seconds if not confirmed
            setTimeout(() => setIsConfirmingAbort(false), 3000);
        }
    };

    // --- PROGRESSION LOGIC ---
    const awardXP = (amount: number) => {
        setUserProfile(prev => {
            const newXp = prev.xp + amount;
            let newLevel = prev.level;
            while (newXp >= (newLevel + 1) * 2000) {
                newLevel++;
            }
            return {
                ...prev,
                xp: newXp,
                level: newLevel,
                title: getTitle(newLevel)
            };
        });
    };

    const addToCollection = (dishName: string, score: number, flagEmoji: string, countryCode?: string) => {
        setUserProfile(prev => {
            const newHistory = prev.dishHistory.includes(dishName) ? prev.dishHistory : [...prev.dishHistory, dishName];
            const newStamp: DishStamp = {
                id: Date.now().toString(),
                dishName,
                date: new Date().toISOString(),
                score,
                flagEmoji,
                countryCode
            };
            return {
                ...prev,
                dishHistory: newHistory,
                collection: [...prev.collection, newStamp]
            };
        });
    };

    const completeTutorial = () => {
        setShowTutorial(false);
        setSeenTutorials(prev => ({ ...prev, [gameMode]: true }));

        // Trigger pulse effect
        setTutorialJustFinished(true);
        setTimeout(() => setTutorialJustFinished(false), 2000);

        // Specific scroll logic based on mode
        if (gameMode === 'CHEF') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetId = 'ingredients-board';
            const el = document.getElementById(targetId);
            el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    // --- GAME FLOW ---

    const startGame = async (selectedDiff: Difficulty) => {
        const completed = getCompletedCount(selectedDiff, gameMode);
        if (completed >= ROUNDS_PER_DAY) return;

        logEvent(EVENTS.GAME_START, { difficulty: selectedDiff, gameMode });
        setDifficulty(selectedDiff);
        setTotalScore(0);
        setStreak(0);
        setRoundNumber(completed + 1);
        setGameResult({ totalScore: 0, rounds: [], difficulty: selectedDiff });
        setIsConfirmingAbort(false);

        if (!seenTutorials[gameMode]) {
            setShowTutorial(true);
        }

        const cacheKey = `${selectedDiff}-${completed + 1}-${gameMode}`;

        // Check memory cache
        if (roundCache[cacheKey]) {
            setCurrentRoundData(roundCache[cacheKey]);
            resetRoundState();
            setAppState(AppState.PLAYING);
            return;
        }

        // Check localStorage cache
        const stored = localStorage.getItem(`dishguise_cache_${cacheKey}`);
        if (stored) {
            const data = JSON.parse(stored);
            setRoundCache(prev => ({ ...prev, [cacheKey]: data }));
            setCurrentRoundData(data);
            resetRoundState();
            setAppState(AppState.PLAYING);
            return;
        }

        // Load from Service (Static or AI)
        setAppState(AppState.LOADING);
        await loadRound(selectedDiff, completed + 1, gameMode);
    };

    const prefetchRound = async (diff: Difficulty, nextRoundIdx: number, mode: GameMode) => {
        if (nextRoundIdx > ROUNDS_PER_DAY) return;
        const cacheKey = `${diff}-${nextRoundIdx}-${mode}`;
        if (roundCache[cacheKey]) return; // Already cached

        try {
            await new Promise(r => setTimeout(r, 2000)); // Gentle delay
            const stored = localStorage.getItem(`dishguise_cache_${cacheKey}`);
            if (stored) {
                setRoundCache(prev => ({ ...prev, [cacheKey]: JSON.parse(stored) }));
                return;
            }
            // Fetch from service (silently)
            const data = await getGameRound(diff, nextRoundIdx, mode, userProfile.dishHistory);
            setRoundCache(prev => ({ ...prev, [cacheKey]: data }));
            localStorage.setItem(`dishguise_cache_${cacheKey}`, JSON.stringify(data));
        } catch (e) { console.warn("Prefetch failed", e); }
    };

    const loadRound = async (diff: Difficulty, roundIdx: number, mode: GameMode) => {
        try {
            const cacheKey = `${diff}-${roundIdx}-${mode}`;
            setLoadingMsg(getRandomLoadingMsg());
            setAppState(AppState.LOADING);

            const data = await getGameRound(diff, roundIdx, mode, userProfile.dishHistory);

            setCurrentRoundData(data);
            setRoundCache(prev => ({ ...prev, [cacheKey]: data }));
            localStorage.setItem(`dishguise_cache_${cacheKey}`, JSON.stringify(data));
            resetRoundState();
            setAppState(AppState.PLAYING);

            // Trigger prefetch for NEXT round
            prefetchRound(diff, roundIdx + 1, mode);
        } catch (e) {
            console.error(e);
            setAppState(AppState.MENU);
        }
    };

    const resetRoundState = () => {
        setPhase(GamePhase.PLAYING);
        setRoundScore(MAX_ROUND_SCORE);
        setCorrectOptionId(null);
        setWrongGuesses(new Set());
        setCrossedOutOptions(new Set());
        setFoundIngredientIds(new Set());
        setWrongIngredientIds(new Set());
        setRevealedIngredientsCount(1);
        setRevealedTriviaCount(0);
        setFlagRevealed(false);
        setCountryRevealed(false);
        setShowConfetti(false);
    };

    const handleRoundWin = (score: number) => {
        logEvent(EVENTS.ROUND_WIN, { score, dish: currentRoundData?.targetDish, gameMode, difficulty });
        SFX.roundWin();
        setPhase(GamePhase.REVEAL);
        setTotalScore(prev => prev + score);
        setStreak(prev => prev + 1);
        setShowConfetti(true);
        setRevealedIngredientsCount(99);
        setRevealedTriviaCount(99);
        setFlagRevealed(true);
        setCountryRevealed(true);
        const dayKey = generateDayId(difficulty, gameMode, roundNumber);
        saveProgress(dayKey);
        awardXP(score);
        if (currentRoundData) {
            addToCollection(currentRoundData.targetDish, score, currentRoundData.flagEmoji, currentRoundData.countryCode);
        }
        setGameResult(prev => {
            if (!prev) return null;
            return {
                ...prev,
                totalScore: prev.totalScore + score,
                rounds: [
                    ...prev.rounds,
                    {
                        dish: currentRoundData!.targetDish,
                        score: score,
                        correct: true,
                        flagEmoji: currentRoundData!.flagEmoji,
                        countryCode: currentRoundData!.countryCode,
                        mode: gameMode,
                        category: currentRoundData!.category,
                        region: currentRoundData!.region,
                        isMakeable: currentRoundData!.isMakeable
                    }
                ]
            };
        });
    };

    const handleDetectiveGuess = (optionId: string, isCorrect: boolean) => {
        if (isCorrect) {
            SFX.correct();
            setCorrectOptionId(optionId);
            handleRoundWin(roundScore);
        } else {
            SFX.wrong();
            setStreak(0);
            setWrongGuesses(prev => new Set(prev).add(optionId));
            setRoundScore(prev => Math.max(0, prev - 500));
            triggerPenalty(500);
        }
    };

    const handleToggleCrossout = (id: string) => {
        const next = new Set(crossedOutOptions);
        if (next.has(id)) next.delete(id); else next.add(id);
        setCrossedOutOptions(next);
    };

    const handleChefSelect = (ingId: string, isCorrect: boolean) => {
        if (isCorrect) {
            SFX.correct();
            const newFound = new Set(foundIngredientIds).add(ingId);
            setFoundIngredientIds(newFound);
            const totalCorrect = currentRoundData?.ingredientOptions.filter(o => o.isCorrect).length || 0;
            if (newFound.size >= totalCorrect) {
                handleRoundWin(roundScore);
            }
        } else {
            SFX.wrong();
            setStreak(0);
            setWrongIngredientIds(prev => new Set(prev).add(ingId));
            setRoundScore(prev => Math.max(0, prev - 500));
            triggerPenalty(500);
        }
    };

    const handleChefHint = () => {
        if (!currentRoundData) return;

        // Randomly pick ONE correct ingredient that hasn't been found yet
        const correctOptions = currentRoundData.ingredientOptions.filter(
            o => o.isCorrect && !foundIngredientIds.has(o.id)
        );

        if (correctOptions.length > 0) {
            const randomCorrect = correctOptions[Math.floor(Math.random() * correctOptions.length)];
            handleChefSelect(randomCorrect.id, true);
            setRoundScore(prev => Math.max(0, prev - 250));
            triggerPenalty(250);
        }
    };

    const handleChefTrim = () => {
        if (!currentRoundData) return;

        // Find all distractors that haven't been identified as wrong yet
        const availableDistractors = currentRoundData.ingredientOptions.filter(
            o => !o.isCorrect && !wrongIngredientIds.has(o.id)
        );

        if (availableDistractors.length > 0) {
            const randomDistractor = availableDistractors[Math.floor(Math.random() * availableDistractors.length)];
            setWrongIngredientIds(prev => new Set(prev).add(randomDistractor.id));
            setRoundScore(prev => Math.max(0, prev - 150));
            triggerPenalty(150);
        }
    };

    const handleNextRound = () => {
        if (roundNumber === 4) { // End of Round 4 -> Going into Round 5
            SFX.intermission();
            setAppState(AppState.INTERMISSION);
            return;
        }
        proceedToNextRound();
    };

    const proceedToNextRound = () => {
        if (roundNumber < ROUNDS_PER_DAY) {
            setRoundNumber(prev => prev + 1);
            loadRound(difficulty, roundNumber + 1, gameMode);
        } else {
            const finalScore = totalScore; // Use the compiled total score
            logEvent(EVENTS.GAME_COMPLETE, { totalScore: finalScore, difficulty });
            SFX.gameOver();

            // Update Profile & Streak
            setUserProfile(prev => {
                const newXP = prev.xp + finalScore;
                const newLevel = calculateLevel(newXP);
                const newTitle = getTitle(newLevel);

                // Streak Logic
                const today = new Date().toISOString().split('T')[0];
                const lastPlayed = prev.stats.lastPlayedDate;

                let newStreak = prev.stats.currentStreak;

                if (lastPlayed !== today) {
                    const yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    const yesterdayStr = yesterday.toISOString().split('T')[0];

                    if (lastPlayed === yesterdayStr) {
                        newStreak += 1;
                    } else {
                        newStreak = 1; // Reset or Start
                    }
                }

                return {
                    ...prev,
                    xp: newXP,
                    level: newLevel,
                    title: newTitle,
                    stats: {
                        ...prev.stats,
                        gamesPlayed: prev.stats.gamesPlayed + 1,
                        currentStreak: newStreak,
                        maxStreak: Math.max(prev.stats.maxStreak, newStreak),
                        lastPlayedDate: today
                    }
                };
            });

            setAppState(AppState.GAME_OVER);
        }
    };

    const handleFinishIntermission = () => {
        proceedToNextRound();
    };

    const handleRevealIngredient = () => {
        setRevealedIngredientsCount(prev => prev + 1);
        setRoundScore(prev => Math.max(prev - 150, 0));
        triggerPenalty(150);
    };
    const handleRevealTrivia = () => {
        setRevealedTriviaCount(prev => prev + 1);
        setRoundScore(prev => Math.max(prev - 100, 0));
        triggerPenalty(100);
    };
    const handleRevealRegion = () => {
        setFlagRevealed(true);
        setRoundScore(prev => Math.max(prev - 400, 0));
        triggerPenalty(400);
    };
    const handleRevealCountry = () => {
        setCountryRevealed(true);
        setRoundScore(prev => Math.max(prev - 800, 0));
        triggerPenalty(800);
    };

    const sanitizeReason = (reason: string, targetDish: string) => {
        if (!reason) return "";
        const regex = new RegExp(targetDish, 'gi');
        return reason.replace(regex, "The Ordered Dish");
    };

    const todayISO = new Date().toISOString().split('T')[0];
    const heroImageUrl = `/daily_images/${todayISO}.jpg`; // Expects user to populate this folder

    if (showIntro) return <LogoIntro onComplete={() => setShowIntro(false)} heroImageUrl={heroImageUrl} />;

    if (showAdmin) {
        return <AdminConsole onClose={() => setShowAdmin(false)} />;
    }

    if (appState === AppState.PROFILE) {
        return <CulinaryPassport profile={userProfile} onClose={() => setAppState(AppState.MENU)} />;
    }

    if (appState === AppState.LOADING) {
        return (
            <div className="h-screen w-screen bg-culinary-dark flex flex-col items-center justify-center p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/30 via-culinary-dark to-black pointer-events-none"></div>
                <div className="relative mb-6">
                    <ChefHat size={64} className="text-zinc-600 animate-pulse" />
                    <Sparkles size={32} className="text-culinary-gold absolute -top-2 -right-2 animate-bounce" />
                    <div className="mt-4 text-[10px] font-mono uppercase tracking-widest text-zinc-500 bg-zinc-900/50 px-3 py-1 rounded-full border border-white/5">
                        AI Powered Kitchen
                    </div>
                </div>
                <h2 className="font-serif text-2xl text-white animate-pulse text-center max-w-xs leading-relaxed relative z-10">
                    "{loadingMsg}"
                </h2>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-2">Connecting to Neural Kitchen...</p>
                <div className="mt-8 w-48 h-1 bg-zinc-800 rounded-full overflow-hidden relative z-10">
                    <div className="h-full bg-culinary-gold w-full animate-indeterminate origin-left"></div>
                </div>
            </div>
        );
    }

    if (appState === AppState.INTERMISSION) {
        return (
            <div className="h-screen w-screen bg-culinary-dark flex flex-col items-center justify-center p-6">
                <div className="max-w-md w-full space-y-8 text-center">
                    <div className="relative">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-zinc-800 opacity-20">
                            <Cigarette size={120} />
                        </div>
                        <Timer className="mx-auto text-culinary-gold mb-4 animate-spin-slow" size={32} />
                        <h2 className="text-3xl font-serif text-white mb-1">Smoke Break</h2>
                        <p className="text-zinc-500 text-sm italic">"Chef is screaming in the walk-in fridge. Please hold."</p>
                    </div>
                    <div className="w-full h-[600px] bg-white rounded-lg overflow-hidden shadow-xl mb-6">
                        <iframe
                            id='kofiframe'
                            src='https://ko-fi.com/dishguise/?hidefeed=true&widget=true&embed=true&preview=true'
                            style={{ border: 'none', width: '100%', padding: '4px', background: '#f9f9f9', height: '100%' }}
                            title='dishguise'
                        ></iframe>
                    </div>
                    <button
                        // disabled={intermissionTimer > 0} // Optional: force them to look at it for 3s
                        onClick={handleFinishIntermission}
                        className={`
                        w-full font-bold py-4 rounded-xl uppercase tracking-widest text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-colors
                        bg-white text-black hover:bg-zinc-200
                    `}
                    >
                        Continue to Final Dish <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        );
    }

    if (appState === AppState.MENU) {
        const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
        return (
            <div className="min-h-screen bg-culinary-dark flex flex-col items-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/30 via-culinary-dark to-black pointer-events-none"></div>
                <div className="z-10 w-full max-w-md py-8 flex flex-col h-full relative">
                    <button
                        onClick={handleProfileClick}
                        className="absolute top-0 right-0 p-2 bg-zinc-800/50 rounded-full hover:bg-zinc-700 transition-colors border border-white/10"
                    >
                        <User size={20} className="text-culinary-gold" />
                    </button>
                    <div className="text-center mb-6">
                        <h1 className="text-5xl font-serif text-culinary-cream tracking-tight mb-1">
                            Dish<span className="text-culinary-gold italic">Guise</span>
                        </h1>
                        <div className="flex items-center justify-center gap-2 opacity-60">
                            <div className="h-[1px] w-8 bg-white"></div>
                            <p className="text-[10px] uppercase tracking-[0.2em] font-mono">{today}</p>
                            <div className="h-[1px] w-8 bg-white"></div>
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-2 text-[10px] font-mono text-zinc-500 uppercase">
                            <span>{userProfile.title}</span>
                            <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                            <span>Lvl {userProfile.level}</span>
                        </div>
                    </div>

                    <div className="flex bg-zinc-900 p-1 rounded-lg mb-6 border border-white/10">
                        <button
                            onClick={() => setGameMode('DETECTIVE')}
                            className={`flex-1 py-3 rounded-md text-xs font-bold uppercase tracking-widest transition-all flex flex-col items-center gap-1 ${gameMode === 'DETECTIVE' ? 'bg-zinc-800 text-culinary-gold shadow-md' : 'text-zinc-500 hover:text-zinc-300'}`}
                        >
                            <Utensils size={16} />
                            Critic Mode
                        </button>
                        <button
                            onClick={() => setGameMode('CHEF')}
                            className={`flex-1 py-3 rounded-md text-xs font-bold uppercase tracking-widest transition-all flex flex-col items-center gap-1 ${gameMode === 'CHEF' ? 'bg-zinc-800 text-culinary-gold shadow-md' : 'text-zinc-500 hover:text-zinc-300'}`}
                        >
                            <ChefHat size={16} />
                            Chef Mode
                        </button>
                    </div>

                    <div className="flex-grow space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-1 w-1 rounded-full bg-culinary-gold"></div>
                            <h3 className="font-serif text-lg text-zinc-300">
                                {gameMode === 'DETECTIVE' ? "Guess the Dish" : "Prep the Ingredients"}
                            </h3>
                        </div>
                        {[Difficulty.EASY, Difficulty.MEDIUM, Difficulty.HARD].map((diff) => {
                            const completedCount = getCompletedCount(diff, gameMode);
                            const isComplete = completedCount >= ROUNDS_PER_DAY;
                            let subLabel = "";
                            let desc = "";
                            let recommended = false;
                            if (diff === Difficulty.EASY) {
                                subLabel = "(Easy)";
                                desc = "Kids Mode / Beginner.";
                            } else if (diff === Difficulty.MEDIUM) {
                                subLabel = "(Medium)";
                                desc = "The Standard. Casual Foodie.";
                                recommended = true;
                            } else {
                                subLabel = "(Hard)";
                                desc = "Expert Mode. Deep Cuts.";
                            }
                            return (
                                <button
                                    key={diff}
                                    disabled={isComplete}
                                    onClick={() => startGame(diff)}
                                    className={`w-full group relative p-5 rounded-xl border transition-all duration-300 text-left overflow-hidden
                        ${isComplete
                                            ? "bg-zinc-900/50 border-zinc-800 opacity-60 cursor-default"
                                            : recommended
                                                ? "bg-gradient-to-br from-zinc-800 to-zinc-900 border-culinary-gold/30 hover:border-culinary-gold shadow-lg scale-[1.02] ring-1 ring-white/5"
                                                : "bg-gradient-to-br from-zinc-900 to-zinc-900 hover:from-zinc-800 hover:to-zinc-800 border-white/10 hover:border-culinary-gold/50 shadow-lg"
                                        }`}
                                >
                                    {recommended && !isComplete && (
                                        <div className="absolute top-0 right-0 bg-culinary-gold text-black text-[8px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-widest z-20">
                                            Recommended
                                        </div>
                                    )}
                                    <div className="flex justify-between items-start mb-2 relative z-10">
                                        <div>
                                            <h4 className={`font-serif text-xl flex items-center gap-2 ${isComplete ? 'text-zinc-500 decoration-line-through' : 'text-white group-hover:text-culinary-gold'}`}>
                                                {diff}
                                                <span className={`text-sm font-sans font-normal opacity-50 ${isComplete ? '' : 'group-hover:opacity-100'}`}>
                                                    {subLabel}
                                                </span>
                                            </h4>
                                            <p className="text-xs text-zinc-400 mt-1 font-medium">{desc}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            {isComplete ? (
                                                <div className="flex items-center gap-1 text-green-500 bg-green-900/20 px-2 py-1 rounded text-xs font-bold uppercase border border-green-900/50">
                                                    <CheckCircle2 size={12} /> Done
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-1 text-zinc-400 bg-zinc-800 px-2 py-1 rounded text-xs font-bold uppercase">
                                                    <span className={completedCount > 0 ? "text-culinary-gold" : ""}>{completedCount}</span>
                                                    <span className="opacity-50">/</span>
                                                    <span>{ROUNDS_PER_DAY}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {!isComplete && (
                                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 duration-300">
                                            <div className="bg-white text-black p-2 rounded-full shadow-lg">
                                                <Play size={20} fill="currentColor" />
                                            </div>
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                    <div className="mt-8 text-center text-zinc-600 text-[10px] font-mono">
                        DISHGUISE v2.5 • AI POWERED • CULINARY DEDUCTION
                    </div>
                </div>
            </div>
        );
    }

    // --- GAME OVER SCREEN (Refactored) ---
    if (appState === AppState.GAME_OVER) {
        return (
            <GameOverScreen
                totalScore={totalScore}
                gameResult={gameResult}
                difficulty={difficulty}
                gameMode={gameMode}
                APP_URL={APP_URL}
                onMenu={() => setAppState(AppState.MENU)}
                heroImageUrl={heroImageUrl}
                streak={userProfile.stats.currentStreak}
            />
        );
    }

    // --- MAIN GAME LOOP ---
    return (
        <div className="h-screen bg-[#121212] flex flex-col overflow-hidden relative">
            {showConfetti && <Confetti />}
            {showTutorial && <TutorialOverlay mode={gameMode} onComplete={completeTutorial} />}
            {tutorialJustFinished && gameMode === 'DETECTIVE' && (
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none flex flex-col items-center animate-bounce md:hidden">
                    <ArrowDown size={48} className="text-culinary-gold filter drop-shadow-lg" strokeWidth={3} />
                </div>
            )}
            {penalties.map(p => (
                <div
                    key={p.id}
                    className="fixed z-50 text-red-500 font-black text-2xl font-mono animate-float-up pointer-events-none drop-shadow-lg"
                    style={{ left: p.x, top: p.y }}
                >
                    -{p.amount}
                </div>
            ))}
            <header id="header-area" className="flex-none p-4 z-20 bg-[#121212]/90 backdrop-blur-md border-b border-white/5 relative">
                <div className="absolute top-4 left-4 z-30">
                    <button
                        onClick={handleAbortService}
                        className={`
                        flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest transition-all px-2 py-1 rounded border
                        ${isConfirmingAbort
                                ? 'bg-red-600 text-white border-red-500 animate-pulse'
                                : 'bg-red-900/10 text-red-500/50 hover:text-red-500 border-red-500/20'
                            }
                    `}
                    >
                        {isConfirmingAbort ? (
                            <>
                                <AlertTriangle size={10} /> Confirm?
                            </>
                        ) : (
                            <>
                                <LogOut size={10} /> Abort
                            </>
                        )}
                    </button>
                </div>
                <div className="pt-6">
                    <PhaseIndicator
                        currentRound={roundNumber}
                        totalRounds={ROUNDS_PER_DAY}
                        score={totalScore}
                        roundScore={roundScore}
                        difficulty={difficulty}
                        streak={streak}
                    />
                </div>
            </header>

            <main className="flex-grow overflow-y-auto px-4 pb-20 scroll-smooth">
                <div className="max-w-4xl mx-auto w-full pt-2">
                    <div id="dish-card-area">
                        {(phase === GamePhase.REVEAL || gameMode === 'CHEF') && (
                            <div className="mb-6 animate-fade-in">
                                <DishCard
                                    dishName={currentRoundData?.targetDish}
                                    cuisine={currentRoundData?.cuisine}
                                    category={currentRoundData?.category}
                                    phase={phase}
                                    mode={gameMode}
                                />
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-24">
                        <div id="ingredients-board" className={tutorialJustFinished ? 'animate-pulse' : ''}>
                            {gameMode === 'DETECTIVE' ? (
                                <IngredientsBoard
                                    mainIngredients={currentRoundData?.mainIngredients || []}
                                    triviaClues={currentRoundData?.triviaClues || []}
                                    revealedCount={revealedIngredientsCount}
                                    revealedTriviaCount={revealedTriviaCount}
                                    phase={phase}
                                    mode={gameMode}
                                    cuisineName={currentRoundData?.cuisine || ""}
                                    regionName={currentRoundData?.region || ""}
                                    category={currentRoundData?.category || ""}
                                    flagEmoji={currentRoundData?.flagEmoji || ""}
                                    countryCode={currentRoundData?.countryCode} // PASSED
                                    flagRevealed={flagRevealed}
                                    countryRevealed={countryRevealed}
                                    resultStatus={phase === GamePhase.REVEAL ? (correctOptionId ? 'CORRECT' : 'WRONG') : null}
                                    onRevealIngredient={handleRevealIngredient}
                                    onRevealTrivia={handleRevealTrivia}
                                    onRevealRegion={handleRevealRegion}
                                    onRevealCountry={handleRevealCountry}
                                    dishName={currentRoundData?.targetDish}
                                />
                            ) : (
                                <ChefPantry
                                    options={currentRoundData?.ingredientOptions || []}
                                    selectedIds={new Set([...foundIngredientIds, ...wrongIngredientIds])}
                                    foundIds={foundIngredientIds}
                                    wrongIds={wrongIngredientIds}
                                    phase={phase}
                                    onSelect={handleChefSelect}
                                    onHint={handleChefHint}
                                    onTrim={handleChefTrim}
                                />
                            )}
                        </div>

                        {gameMode === 'DETECTIVE' && (
                            <div id="game-area-bottom" className="space-y-6">
                                <div>
                                    <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                                        <div className="flex items-center gap-2">
                                            <MenuIcon size={16} className="text-zinc-500" />
                                            <h3 className="font-serif text-lg text-zinc-300 tracking-wide">The Menu</h3>
                                        </div>
                                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Select One</span>
                                    </div>

                                    <div className="space-y-3">
                                        {currentRoundData?.dishOptions.map((option, index) => {
                                            const isWrong = wrongGuesses.has(option.id);
                                            const isCorrect = correctOptionId === option.id;
                                            const isRevealed = phase === GamePhase.REVEAL;
                                            const isCrossedOut = crossedOutOptions.has(option.id);

                                            if (isWrong) {
                                                return (
                                                    <div key={option.id} className="animate-shake">
                                                        <div className="flex items-center justify-between p-4 bg-red-900/10 border border-red-500/30 rounded opacity-60">
                                                            <span className="font-serif text-red-400 line-through decoration-red-500/50">{option.name}</span>
                                                            <span className="text-[10px] font-black text-red-500 uppercase tracking-widest border border-red-500/50 px-2 py-1 rounded">SENT BACK</span>
                                                        </div>
                                                        {option.reason && (
                                                            <div className="ml-4 mt-1 text-xs text-red-400 italic font-serif border-l-2 border-red-500/30 pl-3 py-1">
                                                                "Chef: {sanitizeReason(option.reason, currentRoundData?.targetDish || "")}"
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            }

                                            if (isCorrect) {
                                                return (
                                                    <div key={option.id} className="p-4 bg-green-900/20 border border-green-500/50 rounded flex items-center justify-between shadow-[0_0_15px_rgba(74,222,128,0.1)]">
                                                        <span className="font-serif text-green-400 font-bold text-lg">{option.name}</span>
                                                        <CheckCircle2 size={20} className="text-green-400" />
                                                    </div>
                                                );
                                            }

                                            return (
                                                <div
                                                    key={option.id}
                                                    className={`group relative flex items-center justify-between p-1 transition-all rounded ${isRevealed ? 'opacity-30 grayscale pointer-events-none' : ''}`}
                                                >
                                                    <button
                                                        onClick={() => handleToggleCrossout(option.id)}
                                                        className={`flex-grow text-left py-3 px-2 rounded hover:bg-white/5 transition-colors ${isCrossedOut ? 'opacity-40' : 'opacity-100'}`}
                                                    >
                                                        <span className={`font-serif text-lg text-zinc-300 group-hover:text-white transition-colors decoration-zinc-500 decoration-1 ${isCrossedOut ? 'line-through' : ''}`}>
                                                            0{index + 1} <span className="mx-2 text-zinc-600">.</span> {option.name}
                                                        </span>
                                                    </button>
                                                    <button
                                                        disabled={isRevealed}
                                                        onClick={() => handleDetectiveGuess(option.id, option.isCorrect)}
                                                        className={`
                                                    ml-4 px-5 py-2 rounded font-mono text-xs font-bold uppercase tracking-widest border transition-all
                                                    ${isCrossedOut
                                                                ? 'border-zinc-800 text-zinc-600 bg-transparent cursor-not-allowed'
                                                                : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-black hover:bg-white hover:border-white shadow-lg'
                                                            }
                                                `}
                                                    >
                                                        {isCrossedOut ? '86\'D' : 'SERVE'}
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}

                        {gameMode === 'CHEF' && (
                            <div id="game-area-bottom"></div>
                        )}
                    </div>

                    {phase === GamePhase.REVEAL && (
                        <div ref={resultsRef} className="pb-8 space-y-6 scroll-mt-24">
                            <div className="bg-gradient-to-br from-culinary-gold to-yellow-600 text-black p-6 rounded-lg shadow-2xl relative overflow-hidden animate-slide-up">
                                <div className="absolute top-0 right-0 p-4 opacity-20">
                                    <ChefHat size={64} />
                                </div>
                                <h3 className="font-black font-serif text-2xl mb-2 uppercase tracking-tight">Dish Notes</h3>
                                <p className="font-serif text-lg leading-relaxed max-w-2xl border-l-4 border-black/20 pl-4 mb-4">
                                    {currentRoundData?.description}
                                </p>
                                {currentRoundData?.originCity && (
                                    <div className="mt-4 pt-4 border-t border-black/10 flex justify-end">
                                        <AffiliateButton
                                            type="TRAVEL"
                                            term={currentRoundData.originCity}
                                            country={currentRoundData.cuisine} // Use country noun
                                            flag={currentRoundData.flagEmoji}
                                            countryCode={currentRoundData.countryCode} // PASSED
                                            className="bg-black/10 hover:bg-black/20 text-black border border-black/10"
                                        />
                                    </div>
                                )}
                            </div>
                            <RecipeHandoff
                                dishName={currentRoundData?.targetDish || "Mystery Dish"}
                                cuisine={currentRoundData?.cuisine || "Global"}
                                ingredients={currentRoundData?.mainIngredients || []}
                                procurementDifficulty={currentRoundData?.procurementDifficulty}
                                executionDifficulty={currentRoundData?.executionDifficulty}
                                onNextRound={handleNextRound}
                                isLastRound={roundNumber >= ROUNDS_PER_DAY}
                            />
                            <div className="h-8"></div>
                        </div>
                    )}

                    {phase === GamePhase.PLAYING && (
                        <div className="fixed bottom-0 left-0 right-0 z-30">
                            <AdBanner variant="BANNER" />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;