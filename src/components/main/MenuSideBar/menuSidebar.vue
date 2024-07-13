<template>
  <aside class="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
    <!--begin::Sidebar Brand-->
    <div class="sidebar-brand justify-content-start">
      <RouterLink to="/" class="brand-link">
       <div class="brand-text"> <img :src="configRdh.logo" alt="Logo"/></div>
      </RouterLink>
    </div>
    <!--end::Sidebar Brand-->

    <!--begin::Sidebar Wrapper-->
    <div class="sidebar-wrapper">
      <nav class="mt-2">
        <!--begin::Sidebar Menu-->
      <!--begin::Sidebar Menu-->
    <!-- Sidebar Menu -->
    <ul class="nav sidebar-menu flex-column" role="menu" data-accordion="false">
      <li v-for="route in mainChildrenRoutes" :key="route.name" class="nav-item">
        <RouterLink class="nav-link align-items-center" :to="{ name: route.name }">
          <FontAwesomeIcon v-if="route.meta.icon" :icon="route.meta.icon" class="nav-icon" />
          <p>{{ route.meta.ruName || route.name }}</p>
        </RouterLink>
        <ul v-if="route.children && route.children.length" class="nav nav-treeview">
          <li v-for="child in route.children" :key="child.name">
            <RouterLink class="nav-link" :to="{ name: child.name }">{{ child.meta.ruName || child.name }}</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
    <!-- End Sidebar Menu -->
    <!--end::Sidebar Menu-->
        <!--end::Sidebar Menu-->
      </nav>
    </div>
    <!--end::Sidebar Wrapper-->

  </aside>
</template>

<script setup lang="ts">
import configRdh from '@/config.ts/configRdh'
import { computed, onMounted, reactive } from 'vue'
import { useRauthStore } from '@/rdhStore/auth'
import { useUiStore } from '@/rdhStore/uiStore'
import SidebarSearch from '@/components/SideBarSearch/sidebar-search.vue'
import { i18n } from '@/translation'
import { RouterLink, useRoute, useRouter } from 'vue-router';

import { faCircle, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import Treeview from '@/utils/adminScript/treeview'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { MenuItem } from '@/components/menu-item/menuItem'
import { routes } from '@/router'
import testMe from '@/components/widgets/testMe.vue';

const authStore = useRauthStore()
const ui = useUiStore()
const router = useRouter()
const config = {
  animationSpeed: 200,
  accordion: false,
}

const TreeViewPlugin = reactive({
  element: null as HTMLElement | null,
  treeview: null as Treeview | null,
})

onMounted(() => {
  TreeViewPlugin.element = document.getElementById('treeview')
  if (TreeViewPlugin.element) {
    TreeViewPlugin.treeview = new Treeview(TreeViewPlugin.element, config)
    console.log('Treeview instance created')
  }
})
// Фильтрация дочерних маршрутов 'Main'
const mainRoute = router.options.routes.find(route => route.name === 'Main')
const mainChildrenRoutes = mainRoute ? mainRoute.children || [] : []

const currentUser = computed(() => authStore.getCurrentUsername)
const sidebarSkin = computed(() => ui.sidebarSkin)
</script>

<style scoped>
/* Add your styles here if needed */
</style>
