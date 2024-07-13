<template>
        <!--begin::App Content Header-->
        <div class="app-content-header">
          <!--begin::Container-->
          <div class="container-fluid">
            <!--begin::Row-->
            <div class="row">
              <div class="col-sm-6">
                <h5 class="mb-0">Поиск РУ медицинских изделий</h5>
              </div>
              <div class="col-sm-6">
                
                <BreadCrumbs />
      

              </div>
            </div>
            <!--end::Row-->
          </div>
          <!--end::Container-->
        </div>
        <!--end::App Content Header-->
        <!--begin::App Content-->
        <div class="app-content">
          <!--begin::Container-->
          <div class="container-fluid">
            <!--begin::Row-->
            <div class="row">
              <div class="col-12">
<bigSearchForm />

              </div>
            </div>
            <!--end::Row-->
          </div>
          <!--end::Container-->
        </div>
        <!--end::App Content-->
</template>

<script setup lang="ts">
import BreadCrumbs from '@/components/widgets/breadCrumbs.vue';
import bigSearchForm from '@/components/regru/bigSearchForm.vue';




</script>