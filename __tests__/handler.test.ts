import { handleGeminiQuestion } from '../app/api/gemini/handler';

test('handleGeminiQuestion returns mocked text from model', async () => {
  const mockModel = {
    generateContent: async (prompt: string) => ({ response: { text: async () => 'unit test answer for: ' + prompt.slice(0, 40) } }),
  };

  const res = await handleGeminiQuestion('Test question', undefined, mockModel as any);
  expect(res).toMatch(/unit test answer for:/);
});
