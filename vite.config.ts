import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import 'dotenv/config';
import logger from './src/utils/logger';
import VueDevTools from 'vite-plugin-vue-devtools';



export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    logger.info(`Vite mode: ${mode}`);
    logger.info(`NODE_ENV: ${env.NODE_ENV}`);



    return {
        mode: env.MODE,
        plugins: [
            vue(),
            VueDevTools()
        ],
        define: { 'process.env': JSON.stringify(process.env) },

        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            }
        },
        css: {
            devSourcemap: env.MODE === 'development'
        },
        server: {
            proxy: {
                '/api': {
                    target: 'http://localhost:8000',
                    changeOrigin: true,
                    secure: false,
                    rewrite: path => path.replace(/^\/api/, '')
                },
                '/api/regdoc': {
                    target: 'https://roszdravnadzor.gov.ru',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/apiregdoc/, ''),
                },
            },
        },

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
    }
});