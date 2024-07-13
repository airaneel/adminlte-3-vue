<script setup lang="ts">
import { faBell, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>

          <!--begin::Notifications Dropdown Menu-->
      <li class="nav-item dropdown">
        <a class="nav-link" data-bs-toggle="dropdown" href="#">
          <FontAwesomeIcon :icon='faBell'/>
          <span class="navbar-badge badge text-bg-warning">15</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
          <span class="dropdown-item dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <FontAwesomeIcon :icon='faMailBulk'/>
            <span class="float-end text-secondary fs-7">3 mins</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="bi bi-people-fill me-2"></i> 8 friend requests
            <span class="float-end text-secondary fs-7">12 hours</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="bi bi-file-earmark-fill me-2"></i> 3 new reports
            <span class="float-end text-secondary fs-7">2 days</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">
            See All Notifications
          </a>
        </div>
      </li>
      <!--end::Notifications Dropdown Menu-->

</template>