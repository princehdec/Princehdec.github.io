declare module '@google/generative-ai' {
  // minimal placeholder types for the SDK used in this project
  export class GoogleGenerativeAI {
    constructor(apiKey: string | undefined);
    getGenerativeModel(opts: { model: string }): any;
  }
}

declare module 'next/server' {
  export type NextRequest = any;
  export const NextResponse: {
    json: (body: any, init?: { status?: number; headers?: Record<string, string> }) => any;
    redirect?: (url: string, init?: { status?: number }) => any;
  };
}
