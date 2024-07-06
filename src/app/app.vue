<template>
    <RouterView v-if="!isAppLoading" />
    <div v-if="isAppLoading">Loading</div>

</template>
<script setup lang="ts">
    import { onMounted, watch, computed, ref } from 'vue';
    import { useWindowSize } from '@vueuse/core';
    import { calculateWindowSize } from '@/utils/helpers';
    import { useRauthStore } from '../rdhStore/auth';
    import { useUiStore } from '../rdhStore/uiStore';
    import Cookies from 'js-cookie';
    import router from '@/router';
    
    const isAppLoading = ref(true);
    const authStore = useRauthStore();
    const uiStore = useUiStore();

    const { width } = useWindowSize();
    const windowSize = computed(() => calculateWindowSize(width.value));

    const checkSession = async () => { 
        

        if (Cookies.get('accessToken')) {
            authStore.setIsLoggedIn(true);
        } else {
            authStore.setIsLoggedIn(false);
            router.push({ name: 'Login' });
        }
        isAppLoading.value = false;

    }

    onMounted(async () => {
        await checkSession();
    });



    watch(windowSize, (newValue) => {
        if (uiStore.screenSize !== newValue) {
            uiStore.setScreenSize(newValue);
        }
    });



</script>