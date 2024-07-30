<template>
  <div>
    <table
      ref="table"
      class="display"
      style="width: 100%"
    >
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.title"
          >
            {{ column.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in data"
          :key="row.id"
        >
          <td
            v-for="column in columns"
            :key="column.data"
          >
            {{ row[column.data] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang='ts' setup>
import { ref, watch, onMounted } from 'vue'
import $ from 'jquery'
import 'datatables.net'

const props = defineProps({
  columns: Array,
  data: Array,
})

const table = ref(null)

const initializeDataTable = () => {
  $(table.value).DataTable({
    data: props.data,
    columns: props.columns,
    destroy: true, // Destroy any existing DataTable on re-initialize
  })
}

watch(
  () => props.data,
  (newData) => {
    if (newData.length) {
      $(table.value).DataTable().clear().rows.add(newData).draw()
    } else {
      initializeDataTable()
    }
  }
)

onMounted(() => {
  initializeDataTable()
})
</script>

<style>
@import 'datatables.net-dt/css/jquery.dataTables.css';
</style>
