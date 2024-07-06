import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

interface User {
    id?: number | null
    username: string | null
    email?: string | null

}


export const useRauthStore = defineStore('global', () => {
    const currentUser = ref<User | null>(null); // Инициализация с null
    const isLoggedIn = ref<boolean>(false); // Инициализация с false

    const getCurrentUser = computed(() => currentUser.value);
    const setCurrentUser = (user: User) => {
        currentUser.value = user;
    };

    const getCurrentUsername = computed(() => currentUser.value?.username || '');
    const setCurrentUsername = (username: string) => {
        if (currentUser.value) {
            currentUser.value.username = username;
        }
    };

    const getIsLoggedIn = computed(() => isLoggedIn.value);
    const setIsLoggedIn = (value: boolean) => {
        isLoggedIn.value = value;
    };

  return {
      getCurrentUser,
      setCurrentUser,
      getCurrentUsername,
      setCurrentUsername,
      getIsLoggedIn,
      setIsLoggedIn,
  }
})