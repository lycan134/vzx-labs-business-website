
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const SYSTEM_INSTRUCTION = `
You are the VZX Labs AI Assistant, a friendly and professional
virtual assistant for a digital solutions studio in the Philippines.

VZX Labs offers web development, business websites, digital invitations,
event websites, and custom digital solutions.

Help visitors understand these services, explore the portfolio,
and prepare project inquiries.

Rules:
- Use clear, concise, approachable language.
- Do not invent prices, delivery dates, guarantees, or testimonials.
- For quotations, ask about project requirements and explain that
  the team must confirm the price.
- If you do not know a company-specific detail, say so honestly.
- Never claim to be a human employee.
- Never request passwords or payment card details.
- If visitors want to speak with the team, suggest:
  https://m.me/vzxlabs
`;

const MODELS = [
  "gemini-3.6-flash",
  "gemini-3.5-flash-lite",
];

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "The AI assistant is not configured yet." },
      { status: 500 }
    );
  }

  try {
    const body: { message?: unknown } = await request.json();
    const message = body.message;

    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please enter a message." },
        { status: 400 }
      );
    }

    if (message.length > 4000) {
      return NextResponse.json(
        { error: "Please keep your message under 4,000 characters." },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    for (const model of MODELS) {
      try {
        console.log(`VZX Labs chatbot trying model: ${model}`);

        const response = await ai.models.generateContent({
          model,
          contents: message.trim(),
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            maxOutputTokens: 500,
          },
        });

        const reply = response.text;

        if (reply) {
          console.log(`VZX Labs chatbot succeeded with ${model}`);
          return NextResponse.json({ reply });
        }

        console.warn(`${model} returned an empty response.`);
      } catch (error) {
        console.error(`VZX Labs model ${model} failed:`, error);
      }
    }

    return NextResponse.json(
      {
        error:
          "Our AI assistant is temporarily busy. Please try again shortly or contact us through Messenger.",
      },
      { status: 503 }
    );
  } catch (error) {
    console.error("VZX Labs chatbot request error:", error);

    return NextResponse.json(
      { error: "Unable to process your message. Please try again." },
      { status: 500 }
    );
  }
}
