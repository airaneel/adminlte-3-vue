import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './app/app.vue';
import router from './router';

import { i18n } from './translation';

// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './main.scss'



import Toast, {PluginOptions} from 'vue-toastification';
import { ProfabricComponents } from '@profabric/vue-components';
import testMe from '@/components/widgets/testMe.vue';
import vuetify from '@/utils/vuetify';
import logger from '@/utils/logger';


const {VITE_NODE_ENV, VITE_GA_ID} = import.meta.env;
logger.info(`Vite is running in ${VITE_NODE_ENV} mode.`);

const options: PluginOptions = {
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: false
};
const pinia = createPinia()
const app = createApp(App);


app.component("testMe", testMe);


app.use(pinia)
    .use(router)
    .use(Toast, options)
    .use(i18n as any)
    .use(vuetify)
    .use(ProfabricComponents);
    


app.mount('#app');
