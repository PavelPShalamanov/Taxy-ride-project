declare module "*.css";
///<reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // Add more VITE_ env vars here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
