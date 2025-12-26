
import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

const API_KEY = process.env.VITE_API_KEY || process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("No API Key");
    process.exit(1);
}

const client = new GoogleGenAI({ apiKey: API_KEY });

async function main() {
    console.log("🔍 Checking available models...");
    try {
        const response = await client.models.list();
        // The response might be an async iterable or a simple list depending on SDK version
        // Newer SDKs often use an async iterator for list()

        console.log("--- MODEL LIST ---");
        for await (const model of response) {
            // Filter for image generation capabilities or just list all
            // Models often have `supportedGenerationMethods`
            console.log(`Name: ${model.name}`);
            console.log(`   Disp: ${model.displayName}`);
            console.log(`   Methods: ${model.supportedGenerationMethods}`);
            console.log("---");
        }
    } catch (e: any) {
        console.error("List failed:", e.message);
        console.error("Full error:", JSON.stringify(e, null, 2));
    }
}

main();
