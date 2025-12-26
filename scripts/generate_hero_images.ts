
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import pantryData from '../src/data/pantry.json';

// Configuration
const API_KEY = process.env.VITE_API_KEY || process.env.GEMINI_API_KEY;
const OUTPUT_DIR = path.resolve(__dirname, '../public/hero-images');
// Fallback to Gemini 2.0 Flash Image Gen (Experimental) which is typically free/preview.
// Imagen 4 requires billing. Nano Banana 3 (v1beta) had 404s.
const IMAGE_MODEL = 'gemini-2.0-flash-exp-image-generation';

if (!API_KEY) {
    console.error("❌ No API Key found in env (VITE_API_KEY or GEMINI_API_KEY).");
    process.exit(1);
}

const client = new GoogleGenAI({ apiKey: API_KEY });

async function fileExists(filepath: string) {
    try {
        await fs.promises.access(filepath);
        return true;
    } catch {
        return false;
    }
}

async function generateImage(date: string, theme: string, region: string) {
    console.log(`🎨 Generating image for ${date}: ${theme} (${region})...`);

    const prompt = `
        Professional food photography of ${theme} from ${region}.
        High resolution, 8k, cinematic lighting, shallow depth of field.
        The food should look delicious, appetizing, and premium.
        Top-down or slightly angled view, suitable for a hero banner.
        No text, no labels.
    `;

    try {
        // NOTE: The @google/genai SDK usage for images varies. 
        // Assuming standard 'generateImages' or similar method exists on the experimental client or using 'models.generateContent' with specific config.
        // If strict typing fails, we might need 'any'.

        // Correct method for @google/genai SDK is often generateImages (plural) or similar
        const response = await client.models.generateImages({
            model: IMAGE_MODEL,
            prompt: prompt,
            config: {
                numberOfImages: 1,
                aspectRatio: "16:9",
                outputMimeType: "image/png"
            }
        });

        if (response && response.generatedImages && response.generatedImages.length > 0) {
            const imageBytes = response.generatedImages[0].image.imageBytes;
            if (imageBytes) {
                const buffer = Buffer.from(imageBytes, 'base64');
                const filePath = path.join(OUTPUT_DIR, `${date}.png`);
                await fs.promises.writeFile(filePath, buffer);
                console.log(`✅ Saved: ${filePath}`);
                return true;
            }
        }

        console.error(`⚠️ No image data returned for ${date}`);
        return false;

    } catch (error: any) {
        console.error(`❌ Failed to generate ${date}:`, error.message);
        // Special handling for quota or safety
        return false;
    }
}

async function main() {
    console.log("🍌 Nano Banana 3 Pro - Hero Image Generator 🍌");
    console.log(`Output Dir: ${OUTPUT_DIR}`);

    // Ensure dir exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const entries = Object.entries(pantryData);
    console.log(`Found ${entries.length} days in Pantry.`);

    for (const [date, menu] of entries) {
        // Skip if exists
        const targetFile = path.join(OUTPUT_DIR, `${date}.png`);
        if (await fileExists(targetFile)) {
            console.log(`⏭️  Skipping ${date} (Already exists)`);
            continue;
        }

        // Generate
        // @ts-ignore - JSON import type inference might be strict
        const { theme, rounds } = menu;

        // Extract a representative region from rounds if not on root (though our schema puts it on root now usually, or we infer)
        // Historically 'theme' is just a string. Let's look at the first round to get region if needed.
        let region = "Global";
        try {
            // @ts-ignore
            if (rounds && rounds.EASY && rounds.EASY[0]) {
                // @ts-ignore
                region = rounds.EASY[0].region || "International";
            }
        } catch (e) { }

        await generateImage(date, theme as string, region);

        // Rate limit kindness
        await new Promise(r => setTimeout(r, 2000));
    }
}

main().catch(err => console.error(err));
