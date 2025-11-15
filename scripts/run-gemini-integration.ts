import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
const handlerPath = new URL('../app/api/gemini/handler.ts', import.meta.url).href;
const { handleGeminiQuestion } = await import(handlerPath);

dotenv.config({ path: '.env.local' });

// Fallback: if dotenv didn't load GOOGLE_API_KEY, try to read .env.local manually and parse it.
if (!process.env.GOOGLE_API_KEY) {
  try {
    const envPath = path.resolve(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
      const raw = fs.readFileSync(envPath, { encoding: 'utf8' });
      const m = raw.match(/^\s*GOOGLE_API_KEY\s*=\s*(.+)\s*$/m);
      if (m && m[1]) {
        // set it for this process only; do not print it
        process.env.GOOGLE_API_KEY = m[1].trim();
      }
    }
  } catch (e) {
    // ignore
  }
}

async function main() {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('GOOGLE_API_KEY not set. Create a .env.local with GOOGLE_API_KEY=your_key or set the env variable.');
    process.exit(1);
  }

  const question = 'Hi, please give a 2-sentence professional summary about Prince Sharma as a 3D environment artist.';
  try {
    const answer = await handleGeminiQuestion(question, apiKey);
    console.log('Integration test answer:\n', answer);
  } catch (err) {
    console.error('Integration test failed:', err);
    process.exit(2);
  }
}

main();
