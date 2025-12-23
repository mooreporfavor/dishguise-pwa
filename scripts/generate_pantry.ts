
import { GoogleGenAI } from "@google/genai";
import * as dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// --- ENV SETUP ---
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

if (!process.env.VITE_API_KEY && process.env.GEMINI_API_KEY) {
    process.env.VITE_API_KEY = process.env.GEMINI_API_KEY;
}

const API_KEY = process.env.VITE_API_KEY || process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("❌ Error: No API Key found in .env.local");
    process.exit(1);
}

// --- DIRECT IMPORT ---
import { generateBatchMenu } from '../src/services/geminiService';

async function main() {
    const today = new Date().toISOString().split('T')[0];
    const targetDate = process.argv[2] || today;
    const outputPath = path.resolve(__dirname, '../pantry_output.json');

    console.log(`👨‍🍳 Cooking up a fresh batch for ${targetDate}...`);
    console.log(`(This might take 10-20 seconds)`);

    try {
        const menu = await generateBatchMenu(targetDate);

        // Output to FILE instead of stdout
        const finalJson = JSON.stringify({ [targetDate]: menu }, null, 2);
        fs.writeFileSync(outputPath, finalJson);

        console.log(`\n✅ Done! Menu saved to:`);
        console.log(`   ${outputPath}`);
        console.log(`\n👉 Open that file, copy all, and paste into src/data/pantry.json`);
    } catch (e: any) {
        console.error("\n🔥 Kitchen Disaster:", e.message);
        process.exit(1);
    }
}

main();
