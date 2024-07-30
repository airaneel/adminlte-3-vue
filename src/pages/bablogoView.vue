<template>
  <div>
    <form @submit.prevent="uploadFile">
      <input
        type="file"
        @change="handleFileUpload"
      />
      <button type="submit">Upload</button>
    </form>
  </div>
  <div class="app-content">
<div class="container-fluid">
	<DataTable class="display" :data="data" :columns="columns" :options="options"/></div>
  </div>
</template>

<script setup lang="ts">
import Cookies from 'js-cookie'
import { onMounted, ref } from 'vue'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
import 'datatables.net-select';
import 'datatables.net-responsive';
 

import axios from 'axios';

DataTable.use(DataTablesCore);

const options = {
  responsive: true,
  select: true,
};

// Define the columns for the DataTable
const columns = ref([
  { title: 'Document Type', data: 'doc_type' },
  { title: 'Number', data: 'number' },
  { title: 'Date', data: 'date' },
  { title: 'Amount', data: 'amount' },
  { title: 'Purpose', data: 'purpose' },
  // Add more columns as needed
])
const file = ref<File | null>(null)

function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files) {
    file.value = target.files[0]
  }
}

async function uploadFile() {
  if (!file.value) return

  const formData = new FormData()
  formData.append('file', file.value)

  const csrftoken = Cookies.get('csrftoken')

  try {
    const response = await fetch('http://localhost:8000/bablogo/upload/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': csrftoken || '',
      },
      body: formData,
    })
    if (!response.ok) throw new Error('Upload failed')
    alert('File uploaded successfully')
  } catch (error) {
    console.error(error)
    alert('Failed to upload file')
  }
}
const data = ref([])

// Fetch data from the API
const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8000/bablogo/documents/')
    data.value = response.data.results
  } catch (error) {
    console.error('Failed to fetch data:', error)
  }
}
onMounted(() => {
  fetchData()
})
</script>
