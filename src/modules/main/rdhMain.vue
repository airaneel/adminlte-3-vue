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
import AppHeader from './header/rdhHeader.vue'
import MenuSidebar from './menu-sidebar/menuSidebar.vue'
import AppFooter from '@/modules/main/footer/footer.vue'
import ControlSidebar from '@/modules/main/control-sidebar/rdhControlbar.vue'
import { useUiStore } from '../../rdhStore/uiStore'
import { useWindowSize } from '@vueuse/core'


const ui = useUiStore()
const darkModeSelected = computed(() => ui.darkMode)
const menuSidebarCollapsed = computed(() => ui.menuSidebarCollapsed)
const controlSidebarCollapsed = computed(() => ui.controlSidebarCollapsed)
const { width } = useWindowSize()

const screenSize = computed(() => {
    if (width.value >= 1200) return 'lg'
    if (width.value >= 992) return 'md'
    if (width.value >= 768) return 'sm'
    return 'xs'
})

// Вычисляемое свойство для определения классов боковой панели
const sidebarClass = computed(() => {
  if (screenSize.value === 'xs' && ui.menuSidebarCollapsed) return 'sidebar-open';
  if ((screenSize.value === 'lg' || screenSize.value === 'md') && ui.menuSidebarCollapsed) return 'sidebar-collapse';
  if (screenSize.value !== 'lg' && screenSize.value !== 'md' && !ui.menuSidebarCollapsed) return 'sidebar-closed';
  return '';
});

let appElement: HTMLElement | null = null
const updateAppClasses = () => {
  if (appElement) {
    appElement.classList.toggle('dark-mode', ui.darkMode);
    appElement.classList.remove('sidebar-closed', 'sidebar-collapse', 'sidebar-open');
    const classToAdd = sidebarClass.value;
    if (classToAdd) {
      appElement.classList.add(classToAdd);
    }
    appElement.classList.toggle('control-sidebar-slide-open', !ui.controlSidebarCollapsed);
  }
};

onMounted(() => {
  appElement = document.getElementById('app');
  if (appElement) {
    appElement.classList.add('sidebar-mini', 'layout-fixed');
    updateAppClasses();
  }

  // Установить начальное значение screenSize в Pinia store
  ui.setScreenSize(screenSize.value);
});

onUnmounted(() => {
  if (appElement) {
    appElement.classList.remove('sidebar-mini', 'layout-fixed', 'dark-mode', 'sidebar-closed', 'sidebar-collapse', 'sidebar-open', 'control-sidebar-slide-open');
  }
});

watch(
  [() => ui.darkMode, () => ui.menuSidebarCollapsed, () => ui.controlSidebarCollapsed, screenSize],
  () => {
    updateAppClasses();

    // Обновить screenSize в Pinia store при изменении размера окна
    ui.setScreenSize(screenSize.value);
  }
);
</script>

<style scoped>
/* Ваши стили */
</style>
