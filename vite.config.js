import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
// Load environment variables based on the current mode
const env = loadEnv(mode, process.cwd());

  return {
    base: env.VITE_BASEPATH || '/',
    plugins: [react(), tsconfigPaths()],
    server: {
      host: '0.0.0.0',
      port: 5173,
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
      },
    },
    define: {
      'process': {},
    },
  };
});
