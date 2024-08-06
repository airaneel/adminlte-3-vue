<template>
  <!--begin::Messages Dropdown Menu-->
  <li class="nav-item dropdown">
    <a class="nav-link" data-bs-toggle="dropdown" href="#">
      <FontAwesomeIcon :icon='faMessage' />
      <span class="navbar-badge badge text-bg-danger">3</span>
    </a>

    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
      <a href="#" class="dropdown-item">
        <!-- message -->
        <div class="d-flex">
          <div class="flex-shrink-0">
            <img src="/assets/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 rounded-circle me-3" />
          </div>
          <div class="flex-grow-1">
            <h3 class="dropdown-item-title">
              Brad Diesel
              <span class="float-end fs-7 text-danger" x><i class="bi bi-star-fill"></i></span>
            </h3>
            <p class="fs-7">Call me whenever you can...</p>
            <p class="fs-7 text-secondary">
              <i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
            </p>
          </div>
        </div>
        <!--end::Message-->
      </a>
      <div class="dropdown-divider"></div>
      <a href="#" class="dropdown-item">
        <!--begin::Message-->
        <div class="d-flex">
          <div class="flex-shrink-0">
            <img src="/assets/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 rounded-circle me-3" />
          </div>
          <div class="flex-grow-1">
            <h3 class="dropdown-item-title">
              John Pierce
              <span class="float-end fs-7 text-secondary">
                <i class="bi bi-star-fill"></i>
              </span>
            </h3>
            <p class="fs-7">I got your message bro</p>
            <p class="fs-7 text-secondary">
              <i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
            </p>
          </div>
        </div>
      </a>
      <!--end::Message-->

      <!--end::devider---------------------------->
      <div class="dropdown-divider"></div>
      <!--end::devider---------------------------->


      <a href="#" class="dropdown-item">
        <!--begin::Message-->
        <div class="d-flex">
          <div class="flex-shrink-0">
            <img src="/assets/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 rounded-circle me-3" />
          </div>
          <div class="flex-grow-1">
            <h3 class="dropdown-item-title">
              Nora Silvester
              <span class="float-end fs-7 text-warning">
                <i class="bi bi-star-fill"></i>
              </span>
            </h3>
            <p class="fs-7">The subject goes here</p>
            <p class="fs-7 text-secondary">
              <i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
            </p>
          </div>
        </div>
        <!--end::Message-->
      </a>


      <!--end::devider---------------------------->
      <div class="dropdown-divider"></div>
      <!--end::devider---------------------------->




      <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>


    </div>
  </li>
  <!--end::Messages Dropdown Menu-->

</template>
<script setup lang="ts">
  import { faMessage } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { Dropdown } from 'bootstrap';
  import { onMounted } from 'vue';


  onMounted(() => {
    const dropdownElement: NodeListOf<HTMLElement> = document.querySelectorAll('[data-bs-toggle="dropdown"]');


    if (dropdownElement) {
      dropdownElement.forEach(dropdown => {
        new Dropdown(dropdown);
      });
    }
  });

</script>
