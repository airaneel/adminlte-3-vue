<template>
  <div class="form-check form-switch">
    <input 
      class="form-check-input" 
      type="checkbox" 
      role="switch" 
      id="flexSwitchCheckChecked" 
      :checked="isDarkTheme" 
      @change="toggleTheme">
    <label class="form-check-label" for="flexSwitchCheckChecked">Тема</label>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAppTheme, toggleAppTheme } from '@/utils/themeSwitch';

const isDarkTheme = ref(false);

const checkInitialTheme = () => {
  const currentTheme = getAppTheme();
  isDarkTheme.value = currentTheme === 'dark';
};

const toggleTheme = () => {
  toggleAppTheme();
  isDarkTheme.value = !isDarkTheme.value;
};

onMounted(() => {
  checkInitialTheme();
});
</script>

<style>
/* Ваши стили, если необходимо */
</style>
