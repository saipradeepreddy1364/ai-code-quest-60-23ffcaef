// src/api/ai.ts

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function buildGeminiBody(
  messages: Array<{ role: string; content: string }>,
  systemPrompt: string
) {
  // Filter empty messages
  const filtered = messages.filter((m) => m.content?.trim());

  // Merge consecutive same-role messages
  const merged: Array<{ role: string; content: string }> = [];
  for (const msg of filtered) {
    const last = merged[merged.length - 1];
    if (last && last.role === msg.role) {
      last.content += "\n" + msg.content;
    } else {
      merged.push({ ...msg });
    }
  }

  // Must start with user message
  while (merged.length > 0 && merged[0].role !== "user") {
    merged.shift();
  }

  // Convert to Gemini format
  const contents = merged.map((msg) => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.content }],
  }));

  return {
    system_instruction: {
      parts: [{ text: systemPrompt }],
    },
    contents,
    generationConfig: {
      maxOutputTokens: 1024,
      temperature: 0.7,
    },
  };
}

async function callGemini(
  messages: Array<{ role: string; content: string }>,
  systemPrompt: string
) {
  const body = buildGeminiBody(messages, systemPrompt);

  const response = await fetch(`${BACKEND_URL}/api/ai/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Backend error (${response.status}):`, errorText);
    throw new Error(`API error: ${response.status} — ${errorText}`);
  }

  const data = await response.json();

  // Gemini response format
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "No response received.";
}

export async function debugCode(
  code: string,
  problemDescription: string,
  language: string
) {
  return callGemini(
    [
      {
        role: "user",
        content: `Problem: ${problemDescription}\n\nLanguage: ${language}\n\nCode:\n${code}\n\nFind bugs and provide corrected code.`,
      },
    ],
    "You are an expert code debugger. Find bugs and provide clear fixes."
  );
}

export async function optimizeCode(
  code: string,
  problemDescription: string,
  language: string
) {
  return callGemini(
    [
      {
        role: "user",
        content: `Problem: ${problemDescription}\n\nLanguage: ${language}\n\nCode:\n${code}\n\nSuggest optimizations.`,
      },
    ],
    "You are an expert at code optimization. Suggest improvements for performance and readability."
  );
}

export async function reviewCode(
  code: string,
  problemDescription: string,
  language: string
) {
  return callGemini(
    [
      {
        role: "user",
        content: `Problem: ${problemDescription}\n\nLanguage: ${language}\n\nCode:\n${code}\n\nReview this code.`,
      },
    ],
    "You are an expert code reviewer. Provide constructive feedback."
  );
}

export async function askAI(
  prompt: string,
  history: Array<{ role: "user" | "assistant"; content: string }> = []
) {
  const messages = [
    ...history,
    { role: "user", content: prompt },
  ];

  return callGemini(
    messages,
    "You are a helpful coding assistant. Help with programming questions, errors, and suggestions."
  );
}