<template>
  <nav class="app-header navbar navbar-expand bg-body">
<div class="container-fluid">
      
      <ul class="navbar-nav">
        <li class="nav-item">
          <span class="nav-link" role="button" @click="ui.toggleMenuSidebar">
            <Ficon :icon="faBars"/>
  
          </span>
        </li>
     
      </ul>
  
      <ul class="navbar-nav ml-auto">
   
        <SidebarSearch ></SidebarSearch>
        <Messages />
        <Notifications />
        <User/>
        <fullScreenToggle />
      </ul>
  
</div>
  </nav>
</template>

<script setup lang="ts">
import { FontAwesomeIcon as Ficon } from '@fortawesome/vue-fontawesome'
import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons'

import { useUiStore } from '../../../rdhStore/uiStore';
import Messages from '@/components/main/header/messages/messages.vue';
import Notifications from '@/components/main/header/notifications/notifications.vue';
import fullScreenToggle from '@/components/main/header/fullScreenToggle.vue';
import User from '@/components/main/header/user/user.vue';
import SidebarSearch from '@/components/SideBarSearch/sidebar-search.vue';

    const ui = useUiStore()

    const toggleControlSidebar = ui.toggleControlSidebar




</script>


