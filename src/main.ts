// Importing essential Vue and Pinia libraries for state management
import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Importing the main App component and router configuration
import App from './app/app.vue';
import router from './router';


// Importing internationalization setup
import { i18n } from './translation';

// Importing global styles and icons

import '@mdi/font/css/materialdesignicons.css'
import './main.scss'

// Importing third-party toast notification library and its types
import Toast, { PluginOptions } from 'vue-toastification';
// Importing custom UI components library
import { ProfabricComponents } from '@profabric/vue-components';
// Importing a specific custom component
import testMe from '@/components/widgets/testMe.vue';
import logger from './utils/logger';
// Importing utility modules



// Accessing environment variables defined in Vite project config
const MODE = process.env.MODE;
// Logging the current running mode of the application
logger.info(`Vite is running in ${MODE} mode.`);

// Configuration options for the toast notifications
const options: PluginOptions = {
    timeout: 3000, // The time after which a toast will close
    closeOnClick: true, // Allows closing toasts by clicking
    pauseOnFocusLoss: true, // Pauses the timer when window loses focus
    pauseOnHover: true, // Pauses the timer on mouse hover
    draggable: true, // Allows dragging the toast to dismiss
    draggablePercent: 0.6, // The percentage of the toast's width needed to dismiss it by dragging
    showCloseButtonOnHover: false, // Shows close button only on hover
    hideProgressBar: false, // Hides the progress bar
    closeButton: 'button', // Type of close button
    icon: true, // Displays an icon on the toast
    rtl: false // Right-to-left layout support
};

// Creating a new Pinia instance for state management
const pinia = createPinia()
// Creating a new Vue application instance
const app = createApp(App);

// Registering the 'testMe' component globally
if (MODE == 'development') {
    app.component("testMe", testMe)
    logger.debug("Added 'testMe' component globally for development purposes");

}



// Adding plugins to the Vue application
app.use(pinia)
    .use(router)
    .use(Toast, options)
    .use(i18n as never)
    .use(ProfabricComponents);

// Mounting the Vue application to the DOM
app.mount('#app');
