import { supabase } from "@/integrations/supabase/client";

async function callAI(messages: Array<{ role: string; content: string }>, type: string) {
  const { data, error } = await supabase.functions.invoke("ai-chat", {
    body: { messages, type },
  });

  if (error) throw error;
  if (data?.error) throw new Error(data.error);
  return data?.content || "Unable to get response.";
}

export async function debugCode(code: string, problemDescription: string, language: string) {
  return callAI([
    { role: "user", content: `Problem: ${problemDescription}\n\nLanguage: ${language}\n\nCode:\n${code}\n\nFind bugs and provide corrected code.` }
  ], "debug");
}

export async function optimizeCode(code: string, problemDescription: string, language: string) {
  return callAI([
    { role: "user", content: `Problem: ${problemDescription}\n\nLanguage: ${language}\n\nCode:\n${code}\n\nSuggest optimizations.` }
  ], "optimize");
}

export async function reviewCode(code: string, problemDescription: string, language: string) {
  return callAI([
    { role: "user", content: `Problem: ${problemDescription}\n\nLanguage: ${language}\n\nCode:\n${code}\n\nReview this code.` }
  ], "review");
}

export async function askAI(prompt: string) {
  return callAI([{ role: "user", content: prompt }], "chat");
}
