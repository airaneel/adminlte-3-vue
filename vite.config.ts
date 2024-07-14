// Importing necessary modules and plugins from Vite, Vue, and other dependencies
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import 'dotenv/config';

// Import custom logger utility for logging purposes
import createViteLogger from './src/utils/viteLogger';

// Initialize the logger
const logger = createViteLogger();

// Define and export the configuration function for Vite
export default () => {
    // Determine the mode of the environment, default to 'development' if not set
    const mode = process.env.MODE || 'development';
    // Load and merge environment variables specific to the current mode
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    // Extract the environment-specific mode variable
    const { VITE_MODE_ENV } = process.env;
    // Log the current mode using the custom logger
    logger.info(`Vite is running in ${VITE_MODE_ENV} mode.`);
    
    // Return the configuration object for Vite
    return defineConfig({
        // Set the mode based on the environment variable; default to 'development'
        mode: VITE_MODE_ENV === 'production' ? 'production' : 'development',
        
        // Register plugins used by Vite, e.g., Vue support
        plugins: [
            vue(),
        ],
        
        // Configure path aliases for easier imports
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

        // Use the custom logger for Vite's internal logging
        customLogger: logger,
        // Adjust log level based on the environment (less verbose in production)
        logLevel: VITE_MODE_ENV === 'production' ? 'warn' : 'info',
    });
};
