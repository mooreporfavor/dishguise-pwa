
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

    // Correct Ingredient = "Chopping" Sound (Crisp Noise Burst)
    correct: () => {
        try {
            const c = getCtx();
            const bufferSize = c.sampleRate * 0.05; // 50ms
            const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }
            const noise = c.createBufferSource();
            noise.buffer = buffer;
            const gain = c.createGain();

            // Envelope for crisp chop
            gain.gain.setValueAtTime(0.2, c.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, c.currentTime + 0.05);

            // Lowpass filter to simulate chopping board thud
            const filter = c.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 1000;

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(c.destination);
            noise.start();
        } catch (e) { console.warn(e); }
    },

    // Wrong = "Sad Trombone" / Plate Break
    wrong: () => {
        const c = getCtx();
        // Break/Crash noise
        const bufferSize = c.sampleRate * 0.3;
        const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (c.sampleRate * 0.1)); // Decay
        }
        const noise = c.createBufferSource();
        noise.buffer = buffer;
        const gain = c.createGain();
        gain.gain.value = 0.15;

        noise.connect(gain);
        gain.connect(c.destination);
        noise.start();

        // Sad tone underneath
        playTone(100, 'sawtooth', 0.4, 0.1);
    },

    // Round Win = "Service Bell" (Ding!)
    roundWin: () => {
        const c = getCtx();
        const osc = c.createOscillator();
        const gain = c.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(2000, c.currentTime); // High belt tone

        // Bell Envelope: Sharp attack, very long decay
        gain.gain.setValueAtTime(0, c.currentTime);
        gain.gain.linearRampToValueAtTime(0.2, c.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 2.0);

        osc.connect(gain);
        gain.connect(c.destination);

        osc.start();
        osc.stop(c.currentTime + 2.1);
    },

    gameOver: () => {
        // ... (Keep existing or modify if needed, leaving sad slide for now)
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
