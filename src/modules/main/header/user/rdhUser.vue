<template>
  <PfDropdown hideArrow class="user-menu">
    <div slot="head">
      <pf-image
        :src="authentication?.photoURL"
        fallbackSrc="assets/img/default-profile.png"
        class="user-image-small"
        width="25"
        height="25"
        alt="User Image"
        rounded
      ></pf-image>
    </div>
    <div slot="body">
      <li class="user-header bg-primary">
        <pf-image
          :src="authentication?.photoURL"
          fallbackSrc="assets/img/default-profile.png"
          class="user-image-big"
          alt="User Image"
          width="90"
          height="90"
          rounded
        ></pf-image>

        <p>
          <span>{{ authentication?.email }}</span>
          <small>
            <span>{{ $t("labels.memberSince") }}&nbsp;</span>
            <span>{{ readableCreatedAtDate }}</span>
          </small>
        </p>
      </li>
      <li class="user-body">
        <div class="row">
          <div class="col-4 text-center">
            <a href="#">{{ $t("labels.followers") }}</a>
          </div>
          <div class="col-4 text-center">
            <a href="#">{{ $t("labels.sales") }}</a>
          </div>
          <div class="col-4 text-center">
            <a href="#">{{ $t("labels.friends") }}</a>
          </div>
        </div>
      </li>
      <li class="user-footer">
        <router-link
          to="/profile"
          class="btn btn-default btn-flat"
        >
          {{ $t("labels.profile") }}
        </router-link>
        <button
          @click="handleLogout"
          class="btn btn-default btn-flat float-right"
        >
          {{ $t("labels.signOut") }}
        </button>
      </li>
    </div>
  </PfDropdown>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { DateTime } from 'luxon';
import { Dropdown as PfDropdown, Image as PfImage } from '@profabric/vue-components';
import { useRouter } from 'vue-router';
import { logout } from '@/services/rdhAuth';
import { useRauthStore } from '@/rdhStore/auth';


const authStore = useRauthStore();
const router = useRouter();

const authentication = computed(() => authStore.getCurrentUsername);

const readableCreatedAtDate = computed(() => {
  if (authentication.value && authentication.value.metadata && authentication.value.metadata.createdAt) {
    return DateTime.fromMillis(
      +authentication.value.metadata.createdAt
    ).toFormat('dd LLLL yyyy');
  }
  return '';
});

const handleLogout = async () => {
  await logout();
  router.replace('/login');
};
</script>

<style src="./user.scss" lang="scss" scoped></style>
