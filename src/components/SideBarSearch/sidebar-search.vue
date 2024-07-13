<template>
    <!-- SEARCH FORM -->
<div class='row'>
    <form class="form-inline">
      <div class="input-group">
        <input class="form-control" type="search" placeholder="Поиск" aria-label="Search">
        <span class="input-group-text" type="submit">
          <Ficon :icon='faSearch' class="nav-icon" />
        </span>
      </div>
    </form>
</div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon as Ficon } from '@fortawesome/vue-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';



const searchText = ref('');
const foundMenuItems = ref<any[]>([]);
const isDropdownOpen = ref(false);



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