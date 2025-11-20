import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Load env from parent directory (where .env file is located) and current directory
    const rootEnv = loadEnv(mode, path.resolve(__dirname, '..'), '');
    const localEnv = loadEnv(mode, '.', '');
    // Use parent env if available, otherwise use local
    const env = { ...localEnv, ...rootEnv };
    
    // Get API key from either VITE_GEMINI_API_KEY or GEMINI_API_KEY
    const apiKey = env.VITE_GEMINI_API_KEY || env.GEMINI_API_KEY || '';
    
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        proxy: {
          '/api': {
            target: 'http://localhost:5050',
            changeOrigin: true,
            secure: false,
          }
        }
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(apiKey),
        'process.env.GEMINI_API_KEY': JSON.stringify(apiKey),
        'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(apiKey),
      },
      // Expose env variables to client (Vite automatically exposes VITE_* vars)
      envPrefix: 'VITE_',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
