import { defineConfig, splitVendorChunkPlugin, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@honkhonk/vite-plugin-svgr';
import obfuscator from 'rollup-plugin-obfuscator';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: env.VITE_BASE_URL,
    plugins: [svgr(), react(), EnvironmentPlugin('all'), obfuscator({}), splitVendorChunkPlugin()],
    esbuild: {
      drop: mode === 'production' ? ['console'] : []
    }
  };
});
