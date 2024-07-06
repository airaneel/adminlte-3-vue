<template>
  <div class="wrapper">
    <app-header></app-header>
    <menu-sidebar></menu-sidebar>
    <div class="content-wrapper">
      <RouterView />
    </div>
    <app-footer></app-footer>
    <control-sidebar></control-sidebar>
    <div
      id="sidebar-overlay"
      v-if="screenSize === 'xs' && menuSidebarCollapsed"
      @click="ui.toggleControlSidebar"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { watch, computed, onMounted, onUnmounted } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { calculateWindowSize } from '@/utils/helpers'
import AppHeader from './header/rdhHeader.vue'
import MenuSidebar from './menu-sidebar/menuSidebar.vue'
import AppFooter from '@/modules/main/footer/footer.vue'
import ControlSidebar from '@/modules/main/control-sidebar/rdhControlbar.vue'
import { useUiStore } from '../../rdhStore/uiStore'

const ui = useUiStore()
const { width } = useWindowSize()

const darkModeSelected = computed(() => ui.darkMode);
const menuSidebarCollapsed = computed(() => ui.menuSidebarCollapsed);
const controlSidebarCollapsed = computed(() => ui.controlSidebarCollapsed);
const screenSize = computed(() => ui.screenSize);

let appElement: HTMLElement | null = null;
const updateAppClasses = () => {
  if (appElement) {
    appElement.classList.toggle('dark-mode', darkModeSelected.value);
    appElement.classList.toggle('sidebar-closed', !menuSidebarCollapsed.value && screenSize.value !== 'lg');
    appElement.classList.toggle('sidebar-collapse', menuSidebarCollapsed.value && screenSize.value === 'lg');
    appElement.classList.toggle('sidebar-open', menuSidebarCollapsed.value && screenSize.value === 'xs');
    appElement.classList.toggle('control-sidebar-slide-open', !controlSidebarCollapsed.value);
  }
};

onMounted(() => {
  appElement = document.getElementById('app');
  if (appElement) {
    appElement.classList.add('sidebar-mini');
    appElement.classList.add('layout-fixed');
    updateAppClasses();
  }
});


onUnmounted(() => {
  if (appElement) {
    appElement.classList.remove('sidebar-mini');
    appElement.classList.remove('layout-fixed');
    appElement.classList.remove('dark-mode');
    appElement.classList.remove('sidebar-closed');
    appElement.classList.remove('sidebar-collapse');
    appElement.classList.remove('sidebar-open');
    appElement.classList.remove('control-sidebar-slide-open');
  }
});

watch(darkModeSelected, (newDarkMode) => {
  if (appElement) {
    appElement.classList.toggle('dark-mode', newDarkMode);
  }
});

watch(
  [darkModeSelected, menuSidebarCollapsed, controlSidebarCollapsed, screenSize],
  () => {
    updateAppClasses();
  }
);
</script>

<style scoped>
/* Ваши стили */
</style>
