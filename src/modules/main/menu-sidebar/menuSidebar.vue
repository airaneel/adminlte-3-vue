<template>
  <aside v-if="menu" class="main-sidebar elevation-4" :class="sidebarSkin">
    <RouterLink to="/" class="brand-link">
      <image
        src="assets/img/logo.png"
        alt="Logo"
        class="brand-image"
        :height='33'
        :width='44'
        style="opacity: 0.8"
      ></image>
      <span class="brand-text font-weight-light">RDH corp</span>
    </RouterLink>

    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <PfImage
            :src="currentUser?.photoURL"
            fallbackSrc="assets/img/default-profile.png"
            class="img-circle"
            alt="User Image"
            :width="34"
            :height="34"
            rounded
          ></PfImage>
        </div>
        <div class="info">
          <RouterLink to="/profile" class="d-block">
            {{ currentUser?.email }}
          </RouterLink>
        </div>
      </div>

      <div class="form-inline">
        <SidebarSearch :menu="menu"></SidebarSearch>
      </div>

      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <AppMenItem v-for="item in menu" :key="item.name" :menuItem="item"></AppMenItem>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRauthStore } from '@/rdhStore/auth'
import { useUiStore } from '@/rdhStore/uiStore'
import AppMenItem from '@/components/menu-item/menu-item.vue'
import { Image as PfImage } from '@profabric/vue-components'
import SidebarSearch from '@/components/sidebar-search/sidebar-search.vue'
import { i18n } from '@/translation'
import { RouterLink } from 'vue-router'

const authStore = useRauthStore()
const ui = useUiStore()

const menu = ref([
  {
    name: i18n.global.t('labels.dashboard'),
    path: '/'
  },
  {
    name: i18n.global.t('labels.blank'),
    path: '/blank'
  },
  {
    name: i18n.global.t('labels.mainMenu'),
    children: [
      {
        name: i18n.global.t('labels.subMenu'),
        path: '/sub-menu-1'
      },
      {
        name: i18n.global.t('labels.blank'),
        path: '/sub-menu-2'
      }
    ]
  }
])

const currentUser = computed(() => authStore.getCurrentUsername)
const sidebarSkin = computed(() => ui.sidebarSkin)
</script>

<style scoped>
.brand-image {
  float: left !important;
  line-height: 0.8 !important;
  margin: -1px 8px 0 6px !important;
  opacity: 0.8 !important;
  --pf-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23) !important;
}

.img-circle {
  --pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;
}

.form-inline {
  width: 100%;
  justify-content: center;
}
</style>
