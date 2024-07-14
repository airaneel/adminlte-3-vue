<template>
  <!--begin::App Content Header-->
  <div class="app-content-header">
    <!--begin::Container-->
    <div class="container-fluid">

      <!--begin::Row-->
      <div class="row">
        <div class="col-12">
          <SearchBar />
        </div>
      </div>

      <div class="row py-1">
        <div class="col-12">
          <div
            class="accordion"
            id="advancedSearch"
          >
            <div class="accordion-item">
              <h2
                class="accordion-header"
                id="headingOne"
              >
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Рассширенный поиск
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#advancedSearch"
              >
                <div class="accordion-body">
                  <bigSearchForm />
                </div>
              </div>
            </div>
          </div>
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

      <!--end::Row-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::App Content-->
</template>

<script setup lang="ts">
import bigSearchForm from '@/components/regru/bigSearchForm.vue'
import SearchBar from '@/components/searchBar/searchBar.vue'
</script>
