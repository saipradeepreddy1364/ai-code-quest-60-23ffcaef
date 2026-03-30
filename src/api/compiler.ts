// src/api/compiler.ts

/**
 * 1. Resolved the 'Property env does not exist on type ImportMeta' error 
 *    using a direct cast to satisfy the TypeScript compiler.
 * 2. Added the /api suffix which is standard for Spring Boot controllers.
 */
const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || 'https://backend-u94c.onrender.com/api';

interface CompilerResponse {
  stdout?: string;
  stderr?: string;
  compileOutput?: string;
  statusId?: number;
  statusDescription?: string;
  cpuTime?: string;
  memory?: number;
}

export async function runCode(code: string, languageId: number, stdin: string = '') {
  try {
    console.log('🚀 Sending to backend:', API_BASE_URL);
    console.log('Full URL:', `${API_BASE_URL}/compiler/run`);
    
    const response = await fetch(`${API_BASE_URL}/compiler/run`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        code, 
        languageId, 
        stdin 
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP ${response.status}`);
    }

    const data: CompilerResponse = await response.json();
    console.log('✅ Backend response:', data);
    
    // Spring Boot backends sometimes return status codes inside the body.
    // We map them here to match the frontend expectations.
    return {
      stdout: data.stdout || '',
      stderr: data.stderr || null,
      compile_output: data.compileOutput || null,
      status: { 
        id: data.statusDescription === 'Success' ? 3 : 4,
        description: data.statusDescription || 'Error'
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