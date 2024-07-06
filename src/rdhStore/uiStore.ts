import { defineStore } from 'pinia';
import { ref } from 'vue';
import { calculateWindowSize } from '@/utils/helpers';

export const useUiStore = defineStore('ui', () => {
const darkMode = ref<boolean>(true);
  const navbarVariant = ref<string>();
  const sidebarSkin = ref<string>();
const menuSidebarCollapsed = ref<boolean>(false);
  const controlSidebarCollapsed = ref<boolean>(true);
  const screenSize = ref(calculateWindowSize(window.innerWidth));

    const toggleState = (state: { value: boolean }) => {
        state.value = !state.value;
    };

    const setState = <T>(state: { value: T }, value: T) => {
        state.value = value;
    };

    return {
        darkMode,
        navbarVariant,
        sidebarSkin,
        menuSidebarCollapsed,
        controlSidebarCollapsed,
        screenSize,
        toggleDarkMode: () => toggleState(darkMode),
        toggleMenuSidebar: () => toggleState(menuSidebarCollapsed),
        toggleControlSidebar: () => toggleState(controlSidebarCollapsed),
        setDarkMode: (selected: boolean) => setState(darkMode, selected),
        setNavbarVariant: (variant: string) => setState(navbarVariant, variant),
        setSidebarSkin: (skin: string) => setState(sidebarSkin, skin),
        setScreenSize: (size: string) => setState(screenSize, size),
    };
});
