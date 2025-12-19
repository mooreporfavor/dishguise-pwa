
// Simple Web Audio API Synthesizer for UI Sounds
// No external assets required

const AudioContext = (window.AudioContext || (window as any).webkitAudioContext);
let ctx: AudioContext | null = null;

const getCtx = () => {
    if (!ctx) {
        ctx = new AudioContext();
    }
    return ctx;
};

const playTone = (freq: number, type: OscillatorType, duration: number, vol: number = 0.1) => {
    try {
        const c = getCtx();
        const osc = c.createOscillator();
        const gain = c.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, c.currentTime);

        gain.gain.setValueAtTime(vol, c.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, c.currentTime + duration);

        osc.connect(gain);
        gain.connect(c.destination);

        osc.start();
        osc.stop(c.currentTime + duration);
    } catch (e) {
        console.warn("Audio play failed", e);
    }
};

export const SFX = {
    click: () => playTone(800, 'sine', 0.05, 0.05),

    correct: () => {
        const c = getCtx();
        const now = c.currentTime;
        // Ding!
        playTone(1200, 'sine', 0.15, 0.1);
        setTimeout(() => playTone(1800, 'sine', 0.3, 0.1), 50);
    },

    wrong: () => {
        playTone(150, 'sawtooth', 0.2, 0.05);
    },

    roundWin: () => {
        // Arpeggio
        let delay = 0;
        [523.25, 659.25, 783.99, 1046.50].forEach(freq => { // C Major
            setTimeout(() => playTone(freq, 'triangle', 0.3, 0.1), delay);
            delay += 80;
        });
    },

    gameOver: () => {
        // Sad slide
        const c = getCtx();
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(400, c.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, c.currentTime + 1.0);
        gain.gain.setValueAtTime(0.1, c.currentTime);
        gain.gain.linearRampToValueAtTime(0, c.currentTime + 1.0);
        osc.connect(gain);
        gain.connect(c.destination);
        osc.start();
        osc.stop(c.currentTime + 1.0);
    },

    intermission: () => {
        playTone(300, 'sine', 0.5, 0.1);
    }
};
