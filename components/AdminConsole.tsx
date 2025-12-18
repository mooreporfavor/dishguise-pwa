
import React, { useState } from 'react';
import { generateDailyRound } from '../services/geminiService';
import { Difficulty, GameMode, RoundData } from '../types';
import { Copy, Loader2, X, Terminal } from 'lucide-react';

interface AdminConsoleProps {
  onClose: () => void;
}

export const AdminConsole: React.FC<AdminConsoleProps> = ({ onClose }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [generatedJson, setGeneratedJson] = useState("");
  
  // Config
  const [diff, setDiff] = useState<Difficulty>(Difficulty.MEDIUM);
  const [count, setCount] = useState(5);
  const [startIdx, setStartIdx] = useState(1);

  const addLog = (msg: string) => setLogs(prev => [...prev, msg]);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedJson("");
    setLogs(["Starting batch generation job..."]);
    
    const results: Record<string, RoundData> = {};

    try {
        for (let i = 0; i < count; i++) {
            const currentIdx = startIdx + i;
            addLog(`Generating Round ${currentIdx} (${diff})...`);
            
            // We generate for DETECTIVE mode as the base data structure works for both
            const round = await generateDailyRound(diff, currentIdx, 'DETECTIVE', []);
            
            // Create a key for the static dictionary
            // We save it for both modes to ensure data availability
            const keyDet = `${diff}-${currentIdx}-DETECTIVE`;
            const keyChef = `${diff}-${currentIdx}-CHEF`;
            
            results[keyDet] = { ...round, id: keyDet };
            results[keyChef] = { ...round, id: keyChef };
            
            addLog(`✅ Round ${currentIdx} complete: ${round.targetDish}`);
            
            // Tiny delay to be safe
            await new Promise(r => setTimeout(r, 1000));
        }
        
        const jsonString = JSON.stringify(results, null, 2);
        setGeneratedJson(jsonString);
        addLog("🎉 Batch Complete. Copy the JSON below.");
        
    } catch (e: any) {
        addLog(`❌ Error: ${e.message}`);
    } finally {
        setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
      navigator.clipboard.writeText(generatedJson);
      alert("JSON copied to clipboard! Paste this into data/staticMenu.ts");
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 text-green-400 font-mono p-6 flex flex-col">
        <div className="flex justify-between items-center mb-6 border-b border-green-900 pb-4">
            <div className="flex items-center gap-2">
                <Terminal size={24} />
                <h2 className="text-xl font-bold">DISHGUISE ADMIN CONSOLE</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-green-900/30 rounded">
                <X size={24} />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow overflow-hidden">
            {/* CONTROLS */}
            <div className="space-y-6">
                <div className="bg-green-900/10 p-4 rounded border border-green-900/50">
                    <h3 className="text-sm uppercase tracking-widest mb-4 font-bold text-green-600">Configuration</h3>
                    
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs mb-1">Difficulty</label>
                            <select 
                                value={diff} 
                                onChange={(e) => setDiff(e.target.value as Difficulty)}
                                className="w-full bg-black border border-green-800 rounded p-2 text-sm"
                            >
                                {Object.values(Difficulty).map(d => (
                                    <option key={d} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs mb-1">Count</label>
                                <input 
                                    type="number" 
                                    value={count}
                                    onChange={(e) => setCount(Number(e.target.value))}
                                    className="w-full bg-black border border-green-800 rounded p-2 text-sm"
                                    min={1} max={20}
                                />
                            </div>
                            <div>
                                <label className="block text-xs mb-1">Start Index</label>
                                <input 
                                    type="number" 
                                    value={startIdx}
                                    onChange={(e) => setStartIdx(Number(e.target.value))}
                                    className="w-full bg-black border border-green-800 rounded p-2 text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black border border-green-900/50 rounded h-64 overflow-y-auto p-4 text-xs">
                    {logs.map((log, i) => (
                        <div key={i} className="mb-1">{`> ${log}`}</div>
                    ))}
                    {isGenerating && <Loader2 className="animate-spin mt-2" size={16} />}
                </div>

                <button 
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className={`w-full py-4 font-bold uppercase tracking-widest rounded transition-all ${isGenerating ? 'bg-green-900 text-green-700 cursor-wait' : 'bg-green-600 text-black hover:bg-green-500'}`}
                >
                    {isGenerating ? "Processing..." : "Generate Batch"}
                </button>
            </div>

            {/* OUTPUT */}
            <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs uppercase">Output JSON</span>
                    {generatedJson && (
                        <button onClick={copyToClipboard} className="flex items-center gap-2 text-xs hover:text-white">
                            <Copy size={12} /> Copy to Clipboard
                        </button>
                    )}
                </div>
                <textarea 
                    readOnly
                    value={generatedJson}
                    className="flex-grow w-full bg-[#0a0a0a] border border-green-900/50 rounded p-4 text-[10px] leading-relaxed resize-none focus:outline-none focus:border-green-500"
                    placeholder="// Generated JSON will appear here..."
                />
            </div>
        </div>
    </div>
  );
};
    