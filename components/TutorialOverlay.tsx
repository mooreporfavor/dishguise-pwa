
import React, { useState, useEffect, useRef } from 'react';
import { GameMode } from '../types';
import { ArrowRight, Check, X, Search, Utensils, AlertCircle, ChefHat } from 'lucide-react';

interface TutorialOverlayProps {
  mode: GameMode;
  onComplete: () => void;
}

export const TutorialOverlay: React.FC<TutorialOverlayProps> = ({ mode, onComplete }) => {
  const [step, setStep] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [isPositioning, setIsPositioning] = useState(true);

  // Define steps based on mode
  const steps = mode === 'DETECTIVE' ? [
    {
      title: "Welcome, Critic",
      desc: "Your reputation is on the line. Can you identify the dish just by analyzing this Prep List?",
      targetId: 'ingredients-board',
      position: 'bottom'
    },
    {
      title: "Analyze & Reveal",
      desc: "Some ingredients are hidden. You can reveal them for a clearer picture, but it costs points from your Ticket Value.",
      targetId: 'ingredients-board',
      position: 'bottom'
    },
    {
      title: "The Menu",
      desc: "This is your deduction zone. Tap a name to 'scratch it out' mentally, or tap SERVE to make your final guess.",
      targetId: 'game-area-bottom',
      position: 'top'
    },
    {
      title: "Watch the Score",
      desc: "Wrong guesses carry a heavy penalty. Keep an eye on your Ticket Value here.",
      targetId: 'header-area',
      position: 'bottom'
    }
  ] : [
    {
      title: "Order Up!",
      desc: "Service has started. This is the dish you need to prepare.",
      targetId: 'dish-card-area',
      position: 'bottom'
    },
    {
      title: "The Pantry",
      desc: "Tap the correct ingredients to add them to the pot. Avoid the decoys!",
      targetId: 'chef-pantry-area',
      position: 'top'
    },
    {
      title: "Sous Chef Help",
      desc: "Stuck? You can buy a hint here, but it'll cost you.",
      targetId: 'chef-hint-btn',
      position: 'top'
    }
  ];

  const currentStep = steps[step];

  // Update position when step changes
  useEffect(() => {
    setIsPositioning(true);
    const updatePosition = () => {
      if (currentStep.targetId) {
        const el = document.getElementById(currentStep.targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          // Small delay to allow scroll to settle before drawing the spotlight
          setTimeout(() => {
            const rect = el.getBoundingClientRect();
            setTargetRect(rect);
            setIsPositioning(false);
          }, 500);
        }
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [step, currentStep.targetId]);

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  // Skip tutorial
  const handleSkip = () => {
      onComplete();
  };

  if (!targetRect) return null;

  // SAFE MODE LOGIC
  // If element is taller than 50% of viewport, pin bubble to bottom screen
  const isTallElement = targetRect.height > window.innerHeight * 0.5;
  
  // Standard logic (only used if not tall)
  const isBubbleAbove = currentStep.position === 'top' || (targetRect.top > window.innerHeight / 2);

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      
      {/* SPOTLIGHT HIGHLIGHT */}
      {/* We use a massive box-shadow to dim everything else */}
      <div 
        className={`absolute rounded-xl transition-all duration-500 ease-out border-4 border-culinary-gold/50 ${isPositioning ? 'opacity-0' : 'opacity-100'}`}
        style={{
            top: targetRect.top - 8,
            left: targetRect.left - 8,
            width: targetRect.width + 16,
            height: targetRect.height + 16,
            boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.85)'
        }}
      >
          {/* Pulsing indicator to draw eye */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-culinary-gold rounded-full animate-ping"></div>
      </div>

      {/* SPEECH BUBBLE */}
      <div 
        className={`transition-all duration-500 ${isPositioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
        style={isTallElement ? {
            // SAFE MODE: Pinned to bottom of screen
            position: 'fixed',
            bottom: '24px',
            left: '16px',
            right: '16px',
            zIndex: 101,
            transform: 'none'
        } : {
            // STANDARD MODE: Relative to element
            position: 'absolute',
            left: '0',
            right: '0',
            display: 'flex',
            justifyContent: 'center',
            top: isBubbleAbove ? (targetRect.top - 20) : (targetRect.bottom + 20),
            transform: isBubbleAbove ? 'translateY(-100%)' : 'translateY(0)'
        }}
      >
        <div className={`bg-[#f4f4f0] text-zinc-900 w-full rounded-xl shadow-2xl relative ${isTallElement ? '' : 'max-w-xs mx-4'} p-6`}>
            
            {/* Arrow Pointing to Highlight (Only show in Standard Mode) */}
            {!isTallElement && (
                <div 
                    className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#f4f4f0] transform rotate-45 ${isBubbleAbove ? '-bottom-2' : '-top-2'}`}
                ></div>
            )}

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif font-black text-xl uppercase tracking-tight">{currentStep.title}</h3>
                    <span className="text-[10px] font-mono text-zinc-400 font-bold">{step + 1} / {steps.length}</span>
                </div>
                
                <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                    {currentStep.desc}
                </p>

                <div className="flex gap-3">
                    <button 
                        onClick={handleSkip}
                        className="flex-1 py-3 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-600 transition-colors"
                    >
                        Skip
                    </button>
                    <button 
                        onClick={handleNext}
                        className="flex-[2] bg-zinc-900 text-white py-3 rounded-lg text-xs font-black uppercase tracking-widest shadow-lg hover:bg-culinary-gold hover:text-black transition-colors flex items-center justify-center gap-2"
                    >
                        {step === steps.length - 1 ? "Let's Play" : "Next"} <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};
