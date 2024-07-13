<template>
  <div class="app-wrapper">

    <Topbar/>

    <MenuSidebar/>
    <main class="app-main">
      <RouterView />
    </main>
    <Footer/>
  </div>

  <!-- <ControlSidebar/> -->
  <div
  id="sidebar-overlay"
  v-if="screenSize === 'xs' && menuSidebarCollapsed"
  @click="ui.toggleControlSidebar"
  ></div>
</template>
<script setup lang="ts">
import { watch, computed, onMounted } from 'vue';
import Topbar from '@/components/main/header/header.vue';


import { useWindowSize } from '@vueuse/core';
import { addAppClass } from '@/utils/updateClass';
import { useUiStore } from '@/rdhStore/uiStore';
import { RouterView } from 'vue-router';
import MenuSidebar from '@/components/main/MenuSideBar/menuSidebar.vue';
import Footer from '@/components/main/footer/footer.vue';

const ui = useUiStore();
const darkModeSelected = computed(() => ui.darkMode);
const menuSidebarCollapsed = computed(() => ui.menuSidebarCollapsed);
const { width } = useWindowSize();

const screenSize = computed(() => {
  if (width.value >= 1200) return 'lg';
  if (width.value >= 992) return 'md';
  if (width.value >= 768) return 'sm';
  return 'xs';
});

const sidebarClass = computed(() => {
  if (screenSize.value === 'xs' && ui.menuSidebarCollapsed)
    return 'sidebar-open';
  if ((screenSize.value === 'lg' || screenSize.value === 'md') && ui.menuSidebarCollapsed)
    return 'sidebar-collapse';
  if (screenSize.value !== 'lg' && screenSize.value !== 'md' && !ui.menuSidebarCollapsed)
    return 'sidebar-closed';
  return '';
});

let appElement: HTMLElement | null = document.getElementById('app');

const updateAppClasses = () => {
  if (appElement) {
    if (darkModeSelected.value) {
      appElement.classList.add('dark-mode');
    } else {
      appElement.classList.remove('dark-mode');
    }

    appElement.classList.remove('sidebar-closed', 'sidebar-collapse', 'sidebar-open', 'control-sidebar-slide-open');

    if (sidebarClass.value) {
      appElement.classList.add(sidebarClass.value);
    }
    ui.setMainSidebarState(ui.menuSidebarCollapsed);
  }
};

watch([() => ui.menuSidebarCollapsed, screenSize], () => {
  updateAppClasses();
  ui.setScreenSize(screenSize.value);
});

onMounted(() => {
  addAppClass('sidebar-expand-lg');
  addAppClass('sidebar-mini');
  addAppClass('layout-fixed');
  addAppClass('sidebar-open');
  updateAppClasses();
  ui.setScreenSize(screenSize.value);
});


</script>
