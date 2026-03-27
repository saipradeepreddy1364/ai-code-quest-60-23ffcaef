// src/api/compiler.ts

// Use your actual backend URL here
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://backend-9si9.onrender.com/api';

export async function runCode(code: string, languageId: number, stdin: string = '') {
  try {
    console.log('🚀 Sending to backend:', API_BASE_URL);
    console.log('Full URL:', `${API_BASE_URL}/compiler/run`);
    console.log('Language ID:', languageId);

    // Backend expects: { code: string, input: string } 
    // Language ID is optional if backend only compiles Java. But we can pass it for future use
    const body = {
      code,
      input: stdin,  // Your backend expects 'input', not 'stdin'
      languageId,    // Optional, your backend ignores it currently
    };

    const response = await fetch(`${API_BASE_URL}/compiler/run`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text || `HTTP ${response.status}`);
    }

    const data = await response.json();

    console.log('✅ Backend response:', data);

    // Map backend response to frontend expected format
    return {
      stdout: data || '',                // Your backend returns plain output string
      stderr: null,                      // Runtime errors can be handled by backend
      compile_output: null,              // Compilation errors handled in output
      status: { id: 3, description: 'Success' },
      time: '0.00',
      memory: 0
    };

  } catch (error) {
    console.error('❌ Error:', error);
    return {
      stdout: '',
      stderr: error instanceof Error ? error.message : 'Failed to connect to backend',
      compile_output: null,
      status: { id: 4, description: 'Connection Error' },
      time: '0.00',
      memory: 0
    };
  }
}

// Language IDs (optional for now)
export const languageIds = {
  java: 62,
  python: 71,
  cpp: 54,
  c: 50,
  javascript: 63,
  typescript: 74,
  go: 60,
  rust: 73,
  ruby: 72,
  php: 68,
};