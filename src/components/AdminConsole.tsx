
import React, { useState } from 'react';
import { generateBatchMenu } from '../services/geminiService';
import { DailyMenu } from '../data/ThePantry';
import { Copy, Loader2, X, Terminal, Calendar, Layers } from 'lucide-react';

interface AdminConsoleProps {
    onClose: () => void;
}

export const AdminConsole: React.FC<AdminConsoleProps> = ({ onClose }) => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [generatedJson, setGeneratedJson] = useState("");

    // Config
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    const [batchDays, setBatchDays] = useState(7);

    const addLog = (msg: string) => setLogs(prev => [...prev, msg].slice(-20));

    const handleGenerateBatch = async () => {
        setIsGenerating(true);
        setGeneratedJson("");
        setLogs(["Starting Pantry Batch Generation..."]);

        // Check Date
        const start = new Date(startDate);
        if (isNaN(start.getTime())) {
            addLog("❌ Invalid Start Date");
            setIsGenerating(false);
            return;
        }

        const pantryData: Record<string, DailyMenu> = {};

        try {
            for (let i = 0; i < batchDays; i++) {
                // Calculate Current Date String (YYYY-MM-DD)
                const current = new Date(start);
                current.setDate(start.getDate() + i);
                const dateStr = current.toISOString().split('T')[0];

                addLog(`🍳 Cooking ${dateStr}...`);

                let success = false;
                let attempts = 0;

                while (!success && attempts < 3) {
                    try {
                        // Call the Batch Generator
                        const dailyMenu = await generateBatchMenu(dateStr);

                        // Store Result
                        pantryData[dateStr] = dailyMenu;
                        addLog(`✅ Served: ${dailyMenu.theme}`);
                        success = true;

                        // Standard politeness delay
                        await new Promise(r => setTimeout(r, 5000));

                    } catch (err: any) {
                        const isRateLimit = err.message.includes("429") || err.message.includes("Quota") || err.message.includes("RESOURCE_EXHAUSTED");

                        if (isRateLimit && attempts < 2) {
                            addLog(`⚠️ Rate Limit (429). Cooling down 60s...`);
                            await new Promise(r => setTimeout(r, 60000)); // Wait 60s
                            addLog(`🔄 Retrying ${dateStr}...`);
                            attempts++;
                        } else {
                            addLog(`❌ Failed ${dateStr}: ${err.message}`);
                            break; // Fatal error or max retries
                        }
                    }
                }
            }

            // Output format: The dictionary content to paste into ThePantry.ts
            // We strip the outer braces to make it easy to append to existing object, 
            // or keep them if replacing proper. Let's provide the inner content.
            const jsonString = JSON.stringify(pantryData, null, 2);
            // Remove first and last char (curlies) to make it copy-pasteable into the existing object
            const contentStr = jsonString.substring(1, jsonString.length - 1);

            setGeneratedJson(contentStr.trim());
            addLog("🎉 Batch Order Complete. Copy below.");

        } catch (e: any) {
            addLog(`❌ Critical Error: ${e.message}`);
        } finally {
            setIsGenerating(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedJson);
        alert("JSON copied! Paste this into src/data/ThePantry.ts inside the THE_PANTRY object.");
    };

    return (
        <div className="fixed inset-0 z-[100] bg-black/95 text-green-400 font-mono p-6 flex flex-col animate-fade-in">
            <div className="flex justify-between items-center mb-6 border-b border-green-900 pb-4">
                <div className="flex items-center gap-2">
                    <Terminal size={24} />
                    <h2 className="text-xl font-bold tracking-tighter">THE PANTRY CHEF</h2>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-green-900/30 rounded">
                    <X size={24} />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow overflow-hidden">
                {/* CONTROLS */}
                <div className="space-y-6 overflow-y-auto h-full pr-2 custom-scrollbar">
                    <div className="bg-green-900/10 p-6 rounded-xl border border-green-900/50">
                        <h3 className="text-xs uppercase tracking-widest mb-6 font-bold text-green-500 flex items-center gap-2">
                            <Layers size={14} /> Batch Configuration
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs mb-2 text-green-300">Start Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-2.5 text-green-700" size={16} />
                                    <input
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className="w-full bg-black border border-green-800 rounded pl-10 p-2 text-sm focus:border-green-500 outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs mb-2 text-green-300">Batch Size (Days)</label>
                                <input
                                    type="range"
                                    min="1" max="30"
                                    value={batchDays}
                                    onChange={(e) => setBatchDays(Number(e.target.value))}
                                    className="w-fullaccent-green-500 mb-2 h-1 bg-green-900 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between text-xs font-bold">
                                    <span>1 Day</span>
                                    <span className="text-green-400 bg-green-900/40 px-2 rounded">{batchDays} Days</span>
                                    <span>30 Days</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black border border-green-900/50 rounded-xl h-48 overflow-y-auto p-4 text-[10px] font-mono leading-relaxed">
                        {logs.length === 0 && <span className="text-green-900 italic">// Console ready...</span>}
                        {logs.map((log, i) => (
                            <div key={i} className="mb-1 border-b border-green-900/20 pb-1 last:border-0">{`> ${log}`}</div>
                        ))}
                        {isGenerating && <Loader2 className="animate-spin mt-2 text-green-500" size={16} />}
                    </div>

                    <button
                        onClick={handleGenerateBatch}
                        disabled={isGenerating}
                        className={`w-full py-4 font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg text-sm flex items-center justify-center gap-3
                        ${isGenerating
                                ? 'bg-green-900/20 text-green-800 cursor-wait border border-green-900/20'
                                : 'bg-green-600 text-black hover:bg-green-500 shadow-green-900/20'}`}
                    >
                        {isGenerating ? "Cooking..." : "Generate Batch Order"}
                    </button>

                    {/* DEBUG ACTIONS */}
                    <div className="bg-[#1a1a1e] border border-white/10 rounded-xl p-4 mt-6">
                        <div className="flex items-center gap-2 mb-4">
                            <h3 className="font-serif font-bold text-white uppercase tracking-wider text-xs">Danger Zone</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => {
                                    localStorage.removeItem('dishguise_progress_v2');
                                    window.location.reload();
                                }}
                                className="bg-red-900/30 hover:bg-red-900/50 text-red-500 border border-red-500/30 p-3 rounded flex flex-col items-center justify-center gap-1 transition-all"
                            >
                                <span className="font-bold text-xs uppercase">Reset Today</span>
                                <span className="text-[9px] opacity-70">Clears Daily Progress</span>
                            </button>
                            <button
                                onClick={() => {
                                    localStorage.clear();
                                    window.location.reload();
                                }}
                                className="bg-red-950 hover:bg-red-900 text-red-700 border border-red-900/50 p-3 rounded flex flex-col items-center justify-center gap-1 transition-all"
                            >
                                <span className="font-bold text-xs uppercase">Reset Career</span>
                                <span className="text-[9px] opacity-70">Restart from Level 1</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* OUTPUT */}
                <div className="flex flex-col h-full bg-[#050505] rounded-xl border border-green-900/30 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        {generatedJson && (
                            <button onClick={copyToClipboard} className="bg-green-900/80 hover:bg-green-800 text-green-100 text-xs px-3 py-1.5 rounded flex items-center gap-2 backdrop-blur-sm transition-colors">
                                <Copy size={12} /> Copy JSON
                            </button>
                        )}
                    </div>

                    <textarea
                        readOnly
                        value={generatedJson}
                        className="flex-grow w-full bg-transparent p-6 text-[10px] font-mono leading-loose resize-none focus:outline-none text-green-300/80 custom-scrollbar"
                        placeholder="// Resulting JSON will appear here for you to copy into ThePantry.ts..."
                    />
                </div>
            </div>
        </div>
    );
};
