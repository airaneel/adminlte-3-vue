import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import 'dotenv/config';
import createViteLogger from './src/utils/viteLogger';

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    const logger = createViteLogger();

    logger.info(`Vite is running in ${env.VITE_MODE_ENV || mode} mode.`);

    return defineConfig({
        mode: env.VITE_MODE_ENV || 'development',
        plugins: [vue()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@css': path.resolve(__dirname, './src/css'),
                '@store': path.resolve(__dirname, './src/store'),
                '@components': path.resolve(__dirname, './src/components'),
                '@modules': path.resolve(__dirname, './src/modules'),
                '@pages': path.resolve(__dirname, './src/pages')
            }
        },
        css: {
            devSourcemap: mode === 'development'
        },
        customLogger: logger,
        logLevel: env.VITE_MODE_ENV === 'production' ? 'warn' : 'info',
        server: {
            open: true, // Automatically opens the application in the browser when running
            proxy: {
                '/api': {
                    target: 'http://localhost:8000',
                    changeOrigin: true,
                    secure: false,
                    rewrite: path => path.replace(/^\/api/, '')
                
                },

                '/apiregdoc': {
                    target: 'https://roszdravnadzor.gov.ru',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/apiregdoc/, ''),
                },},},
        build: {
            // Настройки для продакшн сборки

            outDir: './dist', // папка, куда будет складываться продакшн билд
            minify: 'esbuild', // минификация кода для уменьшения размера файлов
            rollupOptions: {
                // дополнительные настройки Rollup
                output: {
                    chunkFileNames: 'assets/[name]-[hash].js',
                    entryFileNames: 'assets/[name]-[hash].js',
                    assetFileNames: 'assets/[name]-[hash].[ext]'
                }
            }
        }
    });
};
