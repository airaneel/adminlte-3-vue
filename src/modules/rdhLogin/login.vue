<template>
    <div class="container d-flex h-100 justify-content-center align-items-center">

        <div class="card card-outline card-secondary login">
            <div class="card-header text-center">

                <RouterLink to="/" class="h1"><b>{{ $t("labels.admin") }}</b>{{ $t("labels.lte")
                }}</RouterLink>

            </div>


            <div class="card-body">
                <p class="login-box-msg">{{ $t("labels.signInToStart") }}</p>

                <form>

                    <div class="input-group mb-2">
                        <input class="form-control" type="text" placeholder="логин" autocomplete="off"
                            v-model="username" />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>

                    </div>

                    <div class="input-group mb-2">
                        <input class="form-control" type="password" placeholder="пароль" autocomplete="off"
                            v-model="password">

                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>



                    </div>




                    <div class="row justify-content-end">
                        <div class="col-6">
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" v-model="rememberMe" />
                                <label class="form-check-label">
                                    {{ $t("labels.rememberMe") }}
                                </label>
                            </div>
                        </div>
                        <div class="col-6">
                            <button type="button" class="btn btn-primary btn-block" @click="loginProcess">
                                {{ $t("labels.signIn") }}
                            </button>
                        </div>
                        <!-- /.col -->
                    </div>

                </form>

                <div class='row'>

                    <div class='col'>
                        <p class="mb-0">
                            <RouterLink to="/register" class="text-center">
                                {{ $t("labels.registerMembership") }}
                            </RouterLink>
                        </p>

                    </div>
                    <div class='col'>
                        <p class="mb-1">
                            <RouterLink to="/forgot-password">
                                {{ $t("labels.forgotPassword") }}
                            </RouterLink>
                        </p>

                    </div>
                </div>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </div>

</template>

<script setup lang="ts">
    import { onMounted, onUnmounted, ref } from "vue";
    import { RouterLink, useRoute, useRouter } from "vue-router";
    import { login } from '../../services/rdhAuth';
    import { useToast } from "vue-toastification";

    const username = ref("");
    const password = ref("");
    const rememberMe = ref();
    const isAuthLoading = ref();
    const toast = useToast();

    const route = useRouter();

    const loginProcess = () => {
        try {
            isAuthLoading.value = true;
            login(username.value, password.value)
            isAuthLoading.value = false;
            toast.success('Вход выполнен успешно');
            route.push('/');

          

        } catch (error) {
            isAuthLoading.value = false;
            toast.error(error);
        }
    }




</script>
<style lang="scss" scoped>

.login{
        -ms-flex-align: center;
        background-color: #e9ecef;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        justify-items: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
</style>