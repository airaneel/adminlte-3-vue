import { createLogger, defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import 'dotenv/config';
import ViteLogger from './src/utils/viteLogger';


const logger = ViteLogger();

export default () => {
    const mode = process.env.MODE || 'development'; // Default to 'development' if MODE is not se
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    const { VITE_MODE_ENV } = process.env;
    logger.info(`Vite is running in ${VITE_MODE_ENV} mode.`);
    return defineConfig({
        mode: VITE_MODE_ENV === 'production' ? 'production' : 'development',
        plugins: [vue()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@store': path.resolve(__dirname, './src/store'),
                '@components': path.resolve(__dirname, './src/components'),
                '@modules': path.resolve(__dirname, './src/modules'),
                '@pages': path.resolve(__dirname, './src/pages')
            }
        },
        customLogger: logger,
        logLevel: VITE_MODE_ENV === 'production' ? 'warn' : 'info',
    });

};

