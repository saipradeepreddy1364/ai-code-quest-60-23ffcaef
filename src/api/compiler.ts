// src/api/compiler.ts

// The (import.meta as any) cast is a quick fix if the TS error persists 
// despite the tsconfig change.
// Replace your old API_BASE_URL line with this:
const API_BASE_URL = (import.meta as unknown as { env: { VITE_API_BASE_URL: string } }).env?.VITE_API_BASE_URL || 'https://backend-0gai.onrender.com';
interface CompilerResponse {
  output?: string;
  error?: string;
  compileError?: string;
  statusCode?: number;
  cpuTime?: string;
  memory?: number;
}

export async function runCode(code: string, languageId: number, stdin: string = '') {
  try {
    console.log('🚀 Sending to backend:', API_BASE_URL);
    
    const response = await fetch(`${API_BASE_URL}/compiler/run`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code, languageId, stdin })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP ${response.status}`);
    }

    const data: CompilerResponse = await response.json();
    console.log('✅ Backend response:', data);
    
    return {
      stdout: data.output || '',
      stderr: data.error || null,
      compile_output: data.compileError || null,
      status: { 
        id: data.statusCode === 200 ? 3 : 4,
        description: data.statusCode === 200 ? 'Success' : 'Error'
      },
      time: data.cpuTime || '0.00',
      memory: data.memory || 0,
    };
    
  } catch (error) {
    console.error('❌ Error:', error);
    return {
      stdout: '',
      stderr: error instanceof Error ? error.message : 'Failed to connect to compiler service',
      compile_output: null,
      status: { id: 4, description: 'Connection Error' },
      time: '0.00',
      memory: 0,
    };
  }
}

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