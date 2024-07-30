<template>
  <li class="nav-item dropdown user-menu">
    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
      <img
        :src="userImage"
        class="user-image rounded-circle shadow"
        alt="User Image"
      />
      <span class="d-none d-md-inline">{{ userName }}</span>
    </a>
    <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
      <!-- User image -->
      <li class="user-header text-bg-primary">
        <img
          :src="userImage"
          class="rounded-circle shadow"
          alt="User Image"
        />
        <p>
          {{ userName }} - Web Developer
          <small>Member since Nov. 2023</small>
        </p>
      </li>
      <!-- Menu Body -->
      <li class="user-body">
        <div class="row">
          <div class="col-4 text-center" v-for="item in menuItems" :key="item">
            <a href="#">{{ item }}</a>
          </div>
        </div>
      </li>
      <!-- Menu Footer-->
      <li class="user-footer">
        <a href="#" class="btn btn-default btn-flat">Профиль</a>
        <a @click="logoutUser" href="#" class="btn btn-default btn-flat float-end">Выйти</a>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import router from "@/router";
import { logout } from "@/services/rdhAuth";

const userImage = '/public/assets/img/user2-160x160.jpg';
const userName = 'Alexander Pierce';
const menuItems = ['Followers', 'Sales', 'Friends'];

const logoutUser = async () => {
  await logout();
  router.push({ name: "Login" });
}
</script>
