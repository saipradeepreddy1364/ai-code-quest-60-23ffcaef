/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
}

// Wrap it in a global declare block
declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

// This empty export turns the file into a module, 
// which is sometimes required for 'declare global' to work.
export {};