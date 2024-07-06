<template>
  <nav id="main-header" class="main-header navbar navbar-expand" :class="navbarVariant">
    <ul class="navbar-nav">
      <li class="nav-item">
        <button class="nav-link" role="button" @click="toggleSidebar">
          <i class="fas fa-bars"></i>
        </button>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <RouterLink to="/" class="nav-link">
          {{ $t('labels.home') }}
        </RouterLink>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <RouterLink to="/" class="nav-link">
          {{ $t('labels.contact') }}
        </RouterLink>
      </li>
    </ul>

    <ul class="navbar-nav ml-auto">
      <Messages></Messages>
      <Notifications></Notifications>
      <Languages></Languages>
      <User></User>
      <li class="nav-item">
        <button class="nav-link" @click="toggleControlSidebar">
          <i class="fas fa-th-large"></i>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import Messages from './messages/messages.vue'
import Notifications from './notifications/notifications.vue'
import Languages from './languages/languages.vue'
import User from './user/rdhUser.vue'
import { useUiStore } from '../../../rdhStore/uiStore';

    const ui = useUiStore()

    const toggleSidebar = ui.toggleMenuSidebar
    const toggleControlSidebar = ui.toggleControlSidebar
    const navbarVariant = ui.navbarVariant


onMounted(() => {
  const headerElement = document.getElementById('main-header')
  if (headerElement) {
    headerElement.classList.add('navbar')
  }
})
</script>

<style scoped>
/* Ваши стили */
</style>
