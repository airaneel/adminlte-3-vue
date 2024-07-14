<template>
  <nav class="app-header navbar navbar-expand bg-body">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            class="nav-link"
            role="button"
            @click="ui.toggleMenuSidebar"
            data-lte-toggle="sidebar"
          >
            <Ficon :icon="faBars" />
          </a>
        </li>
      </ul>

      <ul class="navbar-nav ms-auto">
        <Messages />
        <Notifications />
        <User />
        <fullScreenToggle />
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { FontAwesomeIcon as Ficon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Messages from '@/components/main/header/messages/messages.vue'
import Notifications from '@/components/main/header/notifications/notifications.vue'
import fullScreenToggle from '@/components/main/header/fullScreenToggle.vue'
import User from '@/components/main/header/user/user.vue'

import { useUiStore } from '@/rdhStore/uiStore'

const ui = useUiStore()


</script>
