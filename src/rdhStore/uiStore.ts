import { defineStore } from 'pinia';
import { ref } from 'vue';
import { NAVBAR_DARK_VARIANTS, NAVBAR_LIGHT_VARIANTS, SIDEBAR_DARK_SKINS, SIDEBAR_LIGHT_SKINS } from '@/utils/themes';
import logger from '@/utils/logger';

export const useUiStore = defineStore('ui', () => {
    const darkMode = ref<boolean>(true);
    const navbarVariant = ref<string>(NAVBAR_DARK_VARIANTS[0].value);
    const sidebarSkin = ref<string>(SIDEBAR_DARK_SKINS[0].value);
    const menuSidebarCollapsed = ref<boolean>(false);
    const controlSidebarCollapsed = ref<boolean>(true);
    const screenSize = ref<string>('lg');

    const toggleDarkMode = () => {
        darkMode.value = !darkMode.value;
        if (darkMode.value) {
            navbarVariant.value = NAVBAR_DARK_VARIANTS[0].value;
            sidebarSkin.value = SIDEBAR_DARK_SKINS[0].value;
        } else {
            navbarVariant.value = NAVBAR_LIGHT_VARIANTS[0].value;
            sidebarSkin.value = SIDEBAR_LIGHT_SKINS[0].value;
        }
        logger.debug('Dark mode toggled:', darkMode.value);
    };

    const toggleMenuSidebar = () => {
        menuSidebarCollapsed.value = !menuSidebarCollapsed.value;
        logger.debug('Menu sidebar toggled:', menuSidebarCollapsed.value);
    };

    const toggleControlSidebar = () => {
        controlSidebarCollapsed.value = !controlSidebarCollapsed.value;
        logger.debug('Control sidebar toggled:', controlSidebarCollapsed.value);
    };

    const setScreenSize = (size: string) => {
        screenSize.value = size;
        logger.debug('Screen size set to:', screenSize.value);
    };

    const setNavbarVariant = (payload: string) => {
        if (darkMode.value) {
            navbarVariant.value = payload || NAVBAR_DARK_VARIANTS[0].value;
        } else {
            navbarVariant.value = payload || NAVBAR_LIGHT_VARIANTS[0].value;
        }
        logger.debug('Navbar variant set to:', navbarVariant.value);
    };

    const setSidebarSkin = (payload: string) => {
        if (darkMode.value) {
            sidebarSkin.value = payload || SIDEBAR_DARK_SKINS[0].value;
        } else {
            sidebarSkin.value = payload || SIDEBAR_LIGHT_SKINS[0].value;
        }
        logger.debug('Sidebar skin set to:', sidebarSkin.value);
    };

    return {
        darkMode,
        navbarVariant,
        sidebarSkin,
        menuSidebarCollapsed,
        controlSidebarCollapsed,
        screenSize,
        toggleDarkMode,
        toggleMenuSidebar,
        toggleControlSidebar,
        setScreenSize,
        setNavbarVariant,
        setSidebarSkin,
    };
});
