<template>
  <div class="row">
    <form class="form-inline" @submit.prevent="handleSubmit">
      <div class="input-group">
        <input
          class="form-control"
          type="search"
          v-model.trim="searchQuery"
          placeholder="Наименование МИ или номер РУ"
          aria-label="Search"
        />
        <button class="input-group-text" type="submit">
          <FontAwesomeIcon :icon="faSearch" class="nav-icon" />
        </button>
      </div>
      <ProgressBar :loading="isLoading" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import intanceAxios from '@/utils/rdhaxios';
import ProgressBar from "@components/ui/progressBar.vue";
import { useToast } from 'vue-toastification';
import { ref } from 'vue';
import { Emit } from 'vue-facing-decorator';

const searchQuery = ref('');
const isLoading = ref(false);

const toast = useToast();

const handleSubmit = async () => {
  if (!searchQuery.value) {
    toast.error('Введите запрос для поиска');
    return;
  }

  try {
    isLoading.value = true;
    let query = encodeURIComponent(searchQuery.value)
    let url = "/api/regdocs/?search=" + query
    const response = await intanceAxios.get(url);
    const searchResults = response.data.results;

    Emit('search-completed', searchResults);
  } catch (error) {
    toast.error('Ошибка при выполнении запроса');
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}
</script>
