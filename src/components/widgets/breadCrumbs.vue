<template>
  <div class="app-content-breadcrumb">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <ol class="breadcrumb float-sm-start fs-7">
            <li
              v-for="(breadcrumb, index) in breadcrumbs"
              :key="index"
              :class="[
                'breadcrumb-item',
                { active: index === breadcrumbs.length - 1 },
              ]"
            >
              <router-link
                v-if="index !== breadcrumbs.length - 1"
                :to="breadcrumb.path"
                >{{ breadcrumb.name }}</router-link
              >
              <span v-else>{{ breadcrumb.name }}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
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
