<template>
  <div class="login-box">
    <div class="login-logo">
      <RouterLink
        to="/"
        class="h1"
        ><b>{{ $t('labels.admin') }}</b
        >{{ $t('labels.lte') }}</RouterLink
      >
    </div>
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Введите логин и пароль</p>

        <form @click.prevent="">
          <div class="input-group mb-2">
            <input
              class="form-control"
              type="text"
              placeholder="логин"
              autocomplete="off"
              v-model="username"
            />
            <span class="input-group-text">
              <Ficon
                beat
                :icon="faUser"
              />
            </span>
          </div>

          <div class="input-group mb-2">
            <input
              class="form-control"
              type="password"
              placeholder="пароль"
              autocomplete="off"
              v-model="password"
            />

            <span class="input-group-text">
              <Ficon
                beat
                :icon="faLock"
              />
            </span>
          </div>

          <div class="row my-2">
            <div class="col-8">
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="rememberMe"
                />
                <label class="form-check-label">
                  {{ $t('labels.rememberMe') }}
                </label>
              </div>
            </div>

            <div class="col-4">
              <div class="d-grid">
                <button
                  type="button"
                  class="btn btn-primary btn-block"
                  @click="loginProcess"
                >
                  {{ $t('labels.signIn') }}
                </button>
              </div>
            </div>


          </div>
        </form>

        <div class="row my-2">
          <div class="col">
            <p class="mb-0">
              <RouterLink
                to="/register"
                class="text-center"
              >
                {{ $t('labels.registerMembership') }}
              </RouterLink>
            </p>
          </div>
          <div class="col">
            <p class="mb-1">
              <RouterLink to="/forgot-password">
                {{ $t('labels.forgotPassword') }}
              </RouterLink>
            </p>
          </div>
        </div>
        
      </div>
      <!-- /.login-card-body -->
    </div>
  </div>
  <!-- /.login-box -->
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

import { useToast } from 'vue-toastification'
import { addAppClass, removeAppClass } from '@/utils/helpers'
import { FontAwesomeIcon as Ficon } from '@fortawesome/vue-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { login } from '@/services/rdhAuth'



const username = ref('')
const password = ref('')
const rememberMe = ref()
const isAuthLoading = ref()
const toast = useToast()
const route = useRouter()
const loginProcess = async () => {
  try {
    isAuthLoading.value = true
    await login(username.value, password.value)
    isAuthLoading.value = false
    toast.success('Вход выполнен успешно')
    route.push('/')
  } catch (error) {
    isAuthLoading.value = false
    toast.error(error)
  }
}

// add classes from admniLte
onMounted(() => {
  addAppClass('login-page')
  addAppClass('bg-body-secondary')
})

onUnmounted(() => {
  removeAppClass('login-page')
  removeAppClass('bg-body-secondary')
})
</script>
