// src/api/ai.ts

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function sanitizeMessages(
  messages: Array<{ role: string; content: string }>,
) {
  const filtered = messages.filter((m) => m.content?.trim());

  const merged: Array<{ role: string; content: string }> = [];
  for (const msg of filtered) {
    const last = merged[merged.length - 1];
    if (last && last.role === msg.role) {
      last.content += "\n" + msg.content;
    } else {
      merged.push({ ...msg });
    }
  }

  while (merged.length > 0 && merged[0].role !== "user") {
    merged.shift();
  }

  return merged;
}

async function callClaude(
  messages: Array<{ role: string; content: string }>,
  systemPrompt: string
) {
  const sanitized = sanitizeMessages(messages);

  const response = await fetch(`${BACKEND_URL}/api/ai/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: systemPrompt,
      messages: sanitized,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Backend error (${response.status}):`, errorText);
    throw new Error(`API error: ${response.status} — ${errorText}`);
  }

  const data = await response.json();

  // ✅ FIX: Safe parsing (handles empty / unexpected responses)
  if (!data || !data.content || data.content.length === 0) {
    console.warn("Invalid Claude response:", data);
    return "No response received.";
  }

  return data.content[0].text ?? "No response received.";
}

export async function debugCode(
  code: string,
  problemDescription: string,
  language: string
) {
  return callClaude(
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
  return callClaude(
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
  return callClaude(
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

  return callClaude(
    messages,
    "You are a helpful coding assistant. Help with programming questions, errors, and suggestions."
  );
}