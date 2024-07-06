<template>
      <pfDropdown hideArrow :openOnButtonClick="false" :isOpen="isDropdownOpen">
    <template #head>
      <div class="input-group">
        <input
          class="form-control form-control-sidebar"
          type="text"
          placeholder="Search"
          aria-label="Search"
          :value="searchText"
          @input="handleSearchTextChange"
        />
        <div class="input-group-append">
          <button class="btn btn-sidebar" @click="handleIconClick">
            <i
              :class="{
                fas: true,
                'fa-search': searchText.length === 0,
                'fa-times': searchText.length > 0,
                'fa-fw': true,
              }"
            ></i>
          </button>
        </div>
      </div>
    </template>
    <template #body>
      <div v-if="foundMenuItems.length === 0" class="nothing-found">
        No Element found
      </div>
      <div v-if="foundMenuItems.length > 0" class="list-group">
        <router-link
          :to="menuItem.path"
          v-for="menuItem in foundMenuItems"
          :key="menuItem.path"
          class="list-group-item"
          @click="handleMenuItemClick"
        >
          <div
            class="search-title"
            v-html="boldString(menuItem.name, searchText)"
          ></div>
          <div class="search-path">{{ menuItem.name }}</div>
        </router-link>
      </div>
    </template>
  </pfDropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Dropdown as PfDropdown } from '@profabric/vue-components';

const props = defineProps<{ menu: any[] }>();

const searchText = ref('');
const foundMenuItems = ref<any[]>([]);
const isDropdownOpen = ref(false);

const handleSearchTextChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  searchText.value = target.value;
  findMenuItems(props.menu);
};

const handleIconClick = () => {
  searchText.value = '';
  isDropdownOpen.value = false;
};

const handleMenuItemClick = () => {
  searchText.value = '';
  isDropdownOpen.value = false;
};

const findMenuItems = (menu: any[]) => {
  foundMenuItems.value = [];

  if (!searchText.value) {
    isDropdownOpen.value = false;
    return;
  }

  menu.forEach((menuItem: any) => {
    if (
      menuItem.name.toLowerCase().includes(searchText.value.toLowerCase()) &&
      menuItem.path
    ) {
      foundMenuItems.value.push(menuItem);
    }
    if (menuItem.children) {
      findMenuItems(menuItem.children);
    }
  });

  isDropdownOpen.value = foundMenuItems.value.length > 0;
};

const boldString = (str: string, substr: string) => {
  const re = new RegExp(`(${substr})`, 'gi');
  return str.replace(re, `<strong class="text-light">$1</strong>`);
};
</script>