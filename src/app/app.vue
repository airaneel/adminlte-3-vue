<template>
    <RouterView v-if="!isAppLoading" />
    <div v-if="isAppLoading">Loading</div>

</template>
<script setup lang="ts">
    import { onMounted, watch, computed, ref, onUnmounted } from 'vue';
    import { useWindowSize } from '@vueuse/core';
    import { calculateWindowSize } from '@/utils/helpers';
    import { useUiStore } from '../rdhStore/uiStore';
    import logger from '@/utils/logger';
    
    const isAppLoading = ref(true);
    const uiStore = useUiStore();

    const { width } = useWindowSize();
    const windowSize = computed(() => calculateWindowSize(width.value));


// Установить начальное значение screenSize при монтировании компонента
onMounted(() => {
    logger.debug('app.vue mounted');
    uiStore.setScreenSize(windowSize.value);
    logger.debug('app.vue windowSize', windowSize.value);
    isAppLoading.value = false;
});

// Отслеживать изменения windowSize и обновлять screenSize в хранилище
watch(windowSize, (newValue) => {
    if (uiStore.screenSize !== newValue) {
        uiStore.setScreenSize(newValue);
        logger.debug('app.vue windowSize changed', newValue);
    }
});

onUnmounted(() => {
    logger.debug('app.vue unmounted');
    // Нет необходимости обновлять screenSize при размонтировании
});


</script>