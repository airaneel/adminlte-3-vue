<script setup lang="ts">
import {faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import FullScreen from '@/utils/adminScript/fullscreen';
    import { onMounted, ref } from 'vue';


    const fullEl = ref<HTMLElement | null>(null);
    const FullScreenMod = ref<FullScreen>()



    onMounted(() => {
        fullEl.value = document.getElementById('fullscreen');
        FullScreenMod.value = new FullScreen(fullEl.value);

    });

</script>

<template>
          <!--begin::Fullscreen Toggle-->
      <li class="nav-item" id="fullscreen">
        <a class="nav-link" href="#"  data-lte-toggle="fullscreen" @click='FullScreenMod.toggleFullScreen()'>
          <FontAwesomeIcon :icon="faMaximize" data-lte-icon="maximize"/>
          <FontAwesomeIcon :icon="faMinimize" data-lte-icon="minimize" style="display: none;"/>
        </a>
      </li>
      <!--end::Fullscreen Toggle-->

</template>