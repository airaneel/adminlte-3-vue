<template>
  <ol class="breadcrumb float-sm-end">
    <li
      v-for="(breadcrumb, index) in breadcrumbs"
      :key="index"
      :class="['breadcrumb-item', { active: index === breadcrumbs.length - 1 }]"
    >
      <router-link v-if="index !== breadcrumbs.length - 1" :to="breadcrumb.path">{{ breadcrumb.name }}</router-link>
      <span v-else>{{ breadcrumb.name }}</span>
    </li>
  </ol>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()

const breadcrumbs = computed(() => {
  return route.matched.map((match) => ({
    path: match.path,
    name: match.meta.ruName,
  }))
})
</script>

<style scoped>
.breadcrumb-item.active {
  color: #6c757d;
}
</style>
