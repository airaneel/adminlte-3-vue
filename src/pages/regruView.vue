<template>
  <!--begin::App Content Header-->
  <div class="app-content-header">
    <div class="container-fluid">
      <h3>Поиск по базе регистрационных удостоверений</h3>
    </div>
  </div>

  <div class="app-content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <SearchBar
            @is-loading="updateLoading"
            @search-completed="updateTableData"
          />
        </div>
      </div>

      <div class="row py-2">
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
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Расширенный поиск
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

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <DataTableVue
                class="table table-striped table-sm table-hover"
                ref="table"
                :options="tOptions"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#regru"
  >
    Launch demo modal
  </button>

  <div
    class="modal fade"
    id="regru"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-lg modal-fullscreen-lg-down">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{detailedData?.ru_number}}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p v-html="formatedText(detailedData?.ru_body || '')"></p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import bigSearchForm from '@/components/regru/bigSearchForm.vue'
import SearchBar from '@/components/searchBar/searchBar.vue'
import { onMounted, reactive, ref } from 'vue'
import { Regdoc } from '@/types/regdoc'
import axios from '@/utils/rdhaxios'
import { ConfigColumns } from 'datatables.net-bs5'
import langRu from 'datatables.net-plugins/i18n/ru'
import DataTableVue from 'datatables.net-vue3'
import DataTablesLib, { Config } from 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-select-bs5'
import { Modal } from 'bootstrap'
import { useToast } from 'vue-toastification'

DataTableVue.use(DataTablesLib)
const table = ref<InstanceType<typeof DataTableVue>>()
const tableData = ref<Regdoc[]>([])
const isSearching = ref(false)
const isLoading = ref(false)
const detailedData = ref<Regdoc | null>(null)
const updateLoading = (data: boolean) => {
  console.log(data)
  isSearching.value = data
}

const updateTableData = (newData: Regdoc[]) => {
  tableData.value = newData
  table.value?.dt?.clear()
  table.value?.dt?.rows.add(newData)
  table.value?.dt?.on('click', '.badge', (event) => {
    const target = event.target as HTMLElement
    console.log(target.dataset.id)
    currentId.value = target.dataset.id !== undefined ? target.dataset.id : ''
    retriveReg(currentId.value)
  })
  table.value?.dt?.draw()
}

const currentId = ref<string>('')
const columns: ConfigColumns[] = [
  {
    data: '',
    title: '#',
    render: (_data, _type, _row, meta) => {
      let rowNum = meta.row + 1
      return rowNum
    },
    className: 'text-center',
  },
  {
    data: 'ru_number',
    title: 'РУ номер',
    className: 'text-nowrap',
    render: (data, _type, row) => {
      return `<span data-id=${row.id} class="badge text-bg-primary ">${data}</span>`
    },
  },
  {
    data: 'ru_body',
    title: 'Описание',
    render: (data: string) => {
      return data.slice(0, 30) + '...'
    },
  },
  { data: 'manufacturer_name', title: 'Производитель' },
  {
    data: 'code',
    title: 'КВМИ',
    className: 'text-center',
    render: (data: string) => {
      return `<span class="badge text-bg-warning">${data}</span>`
    },
  },
  {
    data: 'ru_status',
    title: 'Статус',
    render: (data: string) => {
      const badgeClass =
        data === 'active' ? 'text-bg-success' : 'text-bg-danger'
      const badgeText = data === 'active' ? 'Активно' : 'Нe Активно'
      return `<span class="badge ${badgeClass}">${badgeText}</span>`
    },
    className: 'text-center',
  },
]

const tOptions = reactive<Config>({
  data: tableData.value,
  columns: columns,
  language: langRu,
  autoWidth: true,
  responsive: true,
  paging: false,
  select: {
    blurable: true,
    style: 'os',
    info: false,
  },
})

const modal = ref<Modal>()
onMounted(() => {
  modal.value = new Modal('#regru')
})

const retriveReg = async (id: string) => {
  isLoading.value = true
  try {
    const response = await axios.get(`api/regdocs/${id}`
  )
    isLoading.value = false // Set isLoading false after API call
    console.log(response.data)
    detailedData.value = response.data
    modal.value?.show()
  } catch (error) {
    useToast().error('Ошибка при выполнении запроса')
    console.error(error)
    isLoading.value = false // Set isLoading false after API call
  } finally {
    isLoading.value = false // Set isLoading false after API call
  }
}

function formatedText(text: string): string {
  return text.replace(/_x000D_/g, '<br>').trim();
}
</script>

<style lang="scss">
@import 'datatables.net-bs5';
@import 'datatables.net-select-bs5';

.table {
  font-size: small;
  width: 100;

  tr {
    cursor: pointer;
  }
}
.skeleton-loader {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skeleton-text {
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e022;
  border-radius: 4px;
  animation: shimmer 1.5s infinite linear;
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}
</style>
