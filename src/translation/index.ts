import {createI18n} from 'vue-i18n';

import ru from './ru.json';
import en from './en.json';


export const i18n = createI18n({
    locale: 'ru',
    messages: {ru, en},
    fallbackLocale: 'en',
    legacy: false
});
