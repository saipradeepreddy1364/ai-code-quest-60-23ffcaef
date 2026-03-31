const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

async function callClaude(messages: Array<{ role: string; content: string }>, systemPrompt: string) {
  const response = await fetch(`${BACKEND_URL}/api/ai/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: systemPrompt,
      messages,
    }),
  });

  if (!response.ok) throw new Error(`API error: ${response.status}`);

  const data = await response.json();
  return data.content[0].text;
}

export async function debugCode(code: string, problemDescription: string, language: string) {
  return callClaude(
    [{ role: "user", content: `Problem: ${problemDescription}\n\nLanguage: ${language}\n\nCode:\n${code}\n\nFind bugs and provide corrected code.` }],
    "You are an expert code debugger. Find bugs and provide clear fixes."
  );
}

export async function optimizeCode(code: string, problemDescription: string, language: string) {
  return callClaude(
    [{ role: "user", content: `Problem: ${problemDescription}\n\nLanguage: ${language}\n\nCode:\n${code}\n\nSuggest optimizations.` }],
    "You are an expert at code optimization. Suggest improvements for performance and readability."
  );
}

export async function reviewCode(code: string, problemDescription: string, language: string) {
  return callClaude(
    [{ role: "user", content: `Problem: ${problemDescription}\n\nLanguage: ${language}\n\nCode:\n${code}\n\nReview this code.` }],
    "You are an expert code reviewer. Provide constructive feedback."
  );
}

export async function askAI(prompt: string) {
  return callClaude(
    [{ role: "user", content: prompt }],
    "You are a helpful coding assistant. Help with programming questions, errors, and suggestions."
  );
