<template>
  <aside
    class="app-sidebar bg-body-secondary shadow"
    data-bs-theme="dark"
  >
    <div class="sidebar-brand justify-content-start">
      <RouterLink
        to="/"
        class="brand-link"
      >
        <div class="brand-text">
          <img
            :src="configRdh.logo"
            alt="Logo"
          />
        </div>
      </RouterLink>
    </div>
    <div class="sidebar-wrapper">
      <nav class="mt-2">
        <ul
          class="nav sidebar-menu flex-column"
          role="menu"
          data-accordion="false"
        >
          <li
            v-for="route in mainChildrenRoutes"
            :key="route.name"
            class="nav-item"
          >
            <RouterLink
              class="nav-link align-items-center"
              :to="{ name: route.name }"
            >
              <FontAwesomeIcon
                v-if="route.meta?.icon"
                :icon="route.meta.icon"
                class="nav-icon"
              />
              <p>{{ route.meta?.ruName || route.name }}</p>
            </RouterLink>
            <ul
              v-if="route.children?.length"
              class="nav nav-treeview"
            >
              <li
                v-for="child in route.children"
                :key="child.name"
              >
                <RouterLink
                  class="nav-link"
                  :to="{ name: child.name }"
                  >{{ child.meta?.ruName || child.name }}</RouterLink
                >
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import configRdh from '@/config.ts/configRdh'
import { useRouter } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { useTreeView } from '@/utils/useTreeView'







const router = useRouter()

const mainRoute = router.options.routes.find((route) => route.name === 'Main')
const mainChildrenRoutes = mainRoute ? mainRoute.children || [] : []

useTreeView({ animationSpeed: 200, accordion: false })


</script>
