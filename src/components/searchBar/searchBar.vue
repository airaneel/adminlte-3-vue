<template>
  <div class="row">
    <form class="form-inline" @submit.prevent="handleSubmit">
      <div class="input-group">
        <input class="form-control" type="search" v-model="modelValue" placeholder="Наименование МИ или номер РУ"
          aria-label="Search" />
        <button class="input-group-text" type="submit">
          <FontAwesomeIcon :icon="faSearch" class="nav-icon" />
        </button>
      </div>
      <ProgressBar :loading="props.isLoading" />
    </form>
  </div>
</template>

<script setup lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faSearch } from '@fortawesome/free-solid-svg-icons';
  import ProgressBar from "@/components/ui/progressBar.vue";
  import logger from '@/utils/logger';

  const props = defineProps<{
    isLoading: boolean;
  }>();

  const emit = defineEmits(['search']);

  const modelValue = defineModel()

  const handleSubmit = () => {
    emit('search', modelValue.value);
    logger.debug('Search triggered');
    logger.debug('Search query:', modelValue.value);
    logger.debug('Is loading:', props.isLoading);
  };
</script>
