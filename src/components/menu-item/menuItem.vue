<template>
  <li v-if="menuItem" class="nav-item" :class="{ 'menu-open': isMenuExtended }" id="rdh-treeview">
    <a
      class="nav-link cursor-pointer"
      :class="{ 'active': isMainActive || isOneOfChildrenActive }"
      @click="handleMainMenuAction"
      >
     <FontAwesomeIcon :icon='menuItem.icon' class='nav-icon'/>
      <p>
        {{ $t(menuItem.name) }}
        <FontAwesomeIcon v-if="isExpandable" :icon="faCaretLeft" class='right'/>
      </p>
    </a>
    <ul v-if="isMenuExtended" >
        <li v-for="child, index in menuItem.children" class='' :key="index">
          <RouterLink to="/" class="nav-link" exact exact-active-class="active">
            <p>{{ $t(child.name) }}</p>
          </RouterLink>
        </li>
    </ul>

  </li>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, Transition } from 'vue';
import { useRouter, useRoute, RouterLink } from 'vue-router';
import { defineProps } from 'vue';
import { MenuItem } from './menuItem';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import Treeview, { Config } from '@/utils/adminScript/treeview';

const props = defineProps<{
  menuItem: MenuItem
}>();

const router = useRouter();
const route = useRoute();

const isMenuExtended = ref(false);
const isExpandable = computed(() => props.menuItem && props.menuItem.children && props.menuItem.children.length > 0);
const isMainActive = ref(false);
const isOneOfChildrenActive = ref(false);


const calculateIsActive = (url: string) => {
  isMainActive.value = false;
  isOneOfChildrenActive.value = false;
  
  if (isExpandable.value) {
    props.menuItem.children.forEach((item: any) => {
      if (item.path === url) {
        isOneOfChildrenActive.value = true;
        isMenuExtended.value = true;
      }
    });
  } else if (props.menuItem.path === url) {
    isMainActive.value = true;
  }
  
  if (!isMainActive.value && !isOneOfChildrenActive.value) {
    isMenuExtended.value = false;
  }
};

const handleMainMenuAction = () => {
  if (isExpandable.value) {
    toggleMenu();
    return;
  }
  router.replace(props.menuItem.path);
};




const treeConfig: Config = {
  animationSpeed: 300, 
  accordion: true,
  
}
const treeElement = document.getElementById('rdh-treeview')
onMounted(() => {
  if (route && route.path) {
    calculateIsActive(route.path);
  }

  router.afterEach((to) => {
    calculateIsActive(to.path);
  });

});

watch(() => route.path, (newPath) => {
  calculateIsActive(newPath);
});

const tree = new Treeview(treeElement, treeConfig)
const toggleMenu = () => {
  tree.toggle()
};

</script>

<style scoped>
/* Базовые стили для контейнера */

/* Анимация для появления */
.slide-enter-active, .slide-leave-active {
  transition: max-height 0.5s ease-in-out,  ease-in-out;
}

.slide-enter-from, .slide-leave-to {
  max-height: 0;

}

.slide-enter-to, .slide-leave-from {
  max-height: 1000px; 
}
</style>
