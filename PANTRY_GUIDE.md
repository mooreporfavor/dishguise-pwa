# 🥫 The Pantry: Static-First Architecture Guide

**The Pantry** is DishGuise's system for pre-generating game content in batches. This allows the application to run **free of API costs** and **with zero latency** for the end user, while retaining the ability to fall back to Live AI if necessary.

## Core Components

### 1. The Schema (`src/data/ThePantry.ts`)
This file acts as a read-only database. It exports a constant `THE_PANTRY` which is a dictionary keyed by date (`YYYY-MM-DD`).
- **Structure**: `DailyMenu` containing a Theme and 5 rounds for each Difficulty (Easy, Medium, Hard).

### 2. The Batch Generator (`generateBatchMenu` in `geminiService.ts`)
This function sends a **single, long-context prompt** to Google Gemini.
- **Input**: A specific date string.
- **Action**: Asks Gemini to generate **15 unique rounds** (5 per difficulty) centered around a random daily theme (e.g., "Street Food from Southeast Asia").
- **Output**: Returns a typically massive JSON object formatted to match the `DailyMenu` schema.

### 3. The Admin Console (`Secret UI`)
A hidden interface for the "Executive Chef" (Developer) to generate content.
- **Access**: Click the **User Profile Icon** (top right) **5 times** rapidly.
- **Features**: 
    - Select Start Date.
    - Select Batch Size (1 to 30 days).
    - "Generate Batch Order" button triggers the sequence.

### 4. The Service Layer (`getGameRound` in `gameService.ts`)
The main entry point for the app to get data.
- **Step 1**: It checks `THE_PANTRY` for the user's current local date.
- **Step 2 (Hit)**: If data exists, it serves it instantly (static JSON).
- **Step 3 (Miss)**: If no data exists, it calls `generateDailyRound` (Live AI) as a fallback.

---

## 👨‍🍳 How to Restock The Pantry (Workflow)

1. **Open the Admin Console**:
   Run the app locally (`npm run dev`) and click the Profile icon 5 times.

2. **Configure the Batch**:
   - Set the **Start Date** (e.g., today or next Monday).
   - Set the **Batch Size** (e.g., `7` for a week, `30` for a month).

3. **Generate**:
   Click **"Generate Batch Order"**. 
   *Note: This process takes ~10-20 seconds per day generated as it calls the AI.*

4. **Copy & Paste**:
   - Once complete, copy the JSON blob from the output text area.
   - Open `src/data/ThePantry.ts`.
   - Paste the JSON **inside** the `THE_PANTRY` object.

   ```typescript
   // src/data/ThePantry.ts
   export const THE_PANTRY: Record<string, DailyMenu> = {
       // ... existing days ...
       
       // PASTE HERE:
       "2023-12-25": { ... },
       "2023-12-26": { ... }
   };
   ```

5. **Commit**:
   Git commit and push the changes. Your users now have instant load times for those dates!
