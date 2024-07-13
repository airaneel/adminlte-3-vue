<template>

  <aside class="control-sidebar control-sidebar-dark" style="padding: 16px; padding-top: 73px">
    <h5>Customize AdminLTE</h5>
    <hr class="mb-2" />
    <div style="padding: 8px 0">
      <div style="display: flex; align-items: center">
        <Pfcheckbox :checked="true" @change="toggelDark" />
        <label style="margin: 0; padding: 0; padding-left: 4px">Dark mode</label>
      </div>
      <VSelect
        label="Light Navbar Variants"
        :value="navbarVariant"
        class="mt-3"
        :items="NAVBAR_LIGHT_VARIANTS"
        variant='outlined'
        @change="onNavbarVariantChange"
      >
        Light Navbar Variants
      </VSelect>
      <Pfselect
        label="Dark Navbar Variants"
        :value="navbarVariant"
        class="mt-3"
        :options="NAVBAR_DARK_VARIANTS"
        type="custom"
        @change="onNavbarVariantChange"
      >
        Dark Navbar Variants
      </Pfselect>
      <Pfselect
        label="Accent Color Variants"
        class="mt-3"
        :options="SIDEBAR_DARK_SKINS"
        type="custom"
        disabled
        @change="onSidebarSkinChange"
      >
        Accent Color Variants
      </Pfselect>
      <Pfselect
        label="Light Sidebar Variants"
        class="mt-3"
        :value="sidebarSkin"
        :options="SIDEBAR_LIGHT_SKINS"
        type="custom"
        @change="onSidebarSkinChange"
      >
        Light Sidebar Variants
      </Pfselect>
      <Pfselect
        label="Dark Sidebar Variants"
        class="mt-3"
        :value="sidebarSkin"
        :options="SIDEBAR_DARK_SKINS"
        type="custom"
        @change="onSidebarSkinChange"
      >
        Dark Sidebar Variants
      </Pfselect>

      <Pfselect
        label="Brand Logo Variants"
        class="mt-3"
        :options="[]"
        type="custom"
        disabled
      >
        Brand Logo Variants
      </Pfselect>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUiStore } from '@/rdhStore/uiStore';
import { Checkbox as Pfcheckbox, Select as Pfselect } from '@profabric/vue-components';
import { NAVBAR_DARK_VARIANTS, NAVBAR_LIGHT_VARIANTS, SIDEBAR_DARK_SKINS, SIDEBAR_LIGHT_SKINS } from '@/utils/themes';
import { VSelect } from 'vuetify/lib/components/index.mjs';

const uiStore = useUiStore();
const toggelDark = uiStore.toggleDarkMode;
const navbarVariant = computed(() => uiStore.navbarVariant);
const sidebarSkin = computed(() => uiStore.sidebarSkin);
const darkMode = computed(() => uiStore.darkMode);



const onNavbarVariantChange = uiStore.setNavbarVariant;

const onSidebarSkinChange = (event: any) => {
  if (event && event.target) {
    uiStore.setSidebarSkin(event.target.value);
  }
};
</script>


