import fs from 'fs';
import path from 'path';

// A minimal mock of the request object expected by the route
function makeReq(body: any) {
  return {
    json: async () => body,
  } as any;
}

// Minimal mock for NextResponse.json to capture output
const captured: any = {};
const NextResponseMock = {
  json: (body: any, init?: any) => {
    captured.body = body;
    captured.init = init;
    return { body, init };
  },
};

(async () => {
  // Make NextResponse mock available globally before importing the route
  (global as any).NextResponse = NextResponseMock;

  // Import the testable handler directly using absolute file URL to avoid resolver issues
  const handlerPath = new URL('../app/api/gemini/handler.ts', import.meta.url).href;
  const { handleGeminiQuestion } = await import(handlerPath);

  // Mock model that returns a predictable response
  const mockModel = {
    generateContent: async (prompt: string) => {
      return { response: { text: async () => 'Mocked answer for: ' + prompt.slice(0, 60) } };
    },
  };

  // Call the handler with a mocked client
  const answer = await handleGeminiQuestion('Hello, can you summarize my portfolio?', undefined, mockModel as any);
  console.log('Mocked handler answer:', answer);
})();
