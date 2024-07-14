<template>
  <!-- Root wrapper for the application interface -->
  <div class="app-wrapper">
    <!-- Top navigation bar component -->
    <Topbar />

    
    <!-- Sidebar menu component -->
    <MenuSidebar />
    <!-- Main content area where router views are displayed -->
    <main class="app-main">
      <BreadCrumbs />
      <RouterView />
    </main>
    <!-- Footer component at the bottom of the page -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Importing necessary Vue composition API functions and components
import { computed, onMounted, watch } from 'vue'
import Topbar from '@/components/main/header/header.vue'
import MenuSidebar from '@/components/main/MenuSideBar/menuSidebar.vue'
import Footer from '@/components/main/footer/footerPart.vue'
import { RouterView } from 'vue-router'

// Importing utility functions and store hooks
import {
  addAppClass,
  calculateWindowSize,
  removeAppClass,
} from '@/utils/helpers'
import { useWindowSize } from '@vueuse/core'
import { useUiStore } from '@/rdhStore/uiStore'
import logger from '@/utils/logger'
import BreadCrumbs from '@/components/widgets/breadCrumbs.vue'

// Accessing UI store for state management
const ui = useUiStore()

// Using a composable to reactively get window size
const { width } = useWindowSize()

// Computed property to determine screen size based on window width
const screenSize = computed(() => calculateWindowSize(width.value))
const collapseMenu = computed(() => ui.menuSidebarCollapsed )

// Lifecycle hook that runs after component mount
onMounted(() => {
  // Adding CSS classes to the app element
  addAppClass('app-loaded')
  addAppClass('layout-fixed')
  addAppClass('sidebar-expand-lg')

  // Updating screen size in the UI store
  ui.setScreenSize(screenSize.value)

  if (ui.screenSize === 'sm' || ui.screenSize === 'xs') {
    logger.debug(ui.screenSize)
    addAppClass('sidebar-collapse')
    ui.setMainSidebarState(true)
  } else {
    addAppClass('sidebar-open')
    ui.setMainSidebarState(false)
  }
})

// Watch the reactive reference or computed property
watch(collapseMenu, (newVal) => {
  if (newVal) {
    removeAppClass('sidebar-open')
    addAppClass('sidebar-collapse')
  } else {
    removeAppClass('sidebar-collapse')
    addAppClass('sidebar-open')
  }
  logger.debug('collapseMenu:', newVal)
})

watch(screenSize, (newVal) => {
  logger.debug('screenSize:', newVal)
  if (newVal === 'sm' || newVal === 'xs') {
    removeAppClass('sidebar-open')
    addAppClass('sidebar-collapse')
    ui.setMainSidebarState(true)
  } else {
    removeAppClass('sidebar-collapse')
    addAppClass('sidebar-open')
    ui.setMainSidebarState(false)
  }
})
</script>