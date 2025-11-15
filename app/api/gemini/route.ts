import { NextRequest, NextResponse } from "next/server";
import { handleGeminiQuestion } from "./handler";

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Server API key is not configured." },
        { status: 500 }
      );
    }

    // Delegate the main logic to the testable handler
    const answer = await handleGeminiQuestion(question, apiKey);
    return NextResponse.json({ answer });

  } catch (error) {
    console.error("Error in AI API route:", error);
    return NextResponse.json(
      { error: "Failed to process the request." },
      { status: 500 }
    );
  }
}