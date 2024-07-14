<template>
  {{ Query }}
  <form @submit.prevent='handleSubmit'>
    <template
      v-for='(groupFields, groupName, index) in groupedFields'
      :key='groupName'
    >
      <hr
        class='my-2 hr'
        v-if='index !== 0'
      />
      <div class='row'>
        <div>{{ groupName }}</div>
        <Field
          v-for='(field, grindex) in groupFields'
          :key='grindex'
          :field='field'
          :index='grindex'
          v-model='Query[field.props.name]'
        />
      </div>
    </template>
    <!-- break after each group -->

    <div class='d-grid'>
      <button
        type='submit'
        class='btn btn-success'
      >
        Поиск
      </button>
    </div>
  </form>
</template>

<script setup lang='ts'>
import { computed, onMounted, reactive, ref } from 'vue'
import Field from './fieldItem.vue' // компонент Field
import axios from 'axios'

import { useToast } from 'vue-toastification'

import { QueryType, Regdoc } from 'src/types/regdoc'
import fields from './form/formData'

const Query = reactive<QueryType>({})

const items = ref<Regdoc[]>()

onMounted(() => {
  fields.forEach((field) => {
    if (field.props.name) {
      Query[field.props.name] = '' // Инициализация с пустыми строками или другими значениями по умолчанию
    }
  })
  console.log(Query)
})
const groupedFields = computed(() => {
  return fields.reduce(
    (groups, field) => {
      const group = field.group?.title || ''
      if (!groups[group]) {
        groups[group] = []
      }
      groups[group].push(field)
      return groups
    },
    {} as Record<string, typeof fields>
  )
})
const handleSubmit = async () => {
  // Фильтрация пустых значений
  const filteredQuery = Object.fromEntries(
    Object.entries(Query).filter(([, value]) => value)
  )

  const queryString = new URLSearchParams(filteredQuery).toString()
  console.log('Form submitted with:', queryString)

  try {
    let response = await axios.get(
      `http://localhost:8000/api/regdocs/?${queryString}`
    )
    items.value = response.data.results
    useToast().success('Запрос успешно выполнен!')

    console.log('API Response:', items.value)
    // Обработка данных ответа здесь
  } catch (error) {
    useToast().error('Ошибка при выполнении запроса к API!')

    console.error('Ошибка при запросе API:', error)
  }
}
</script>

<style lang='scss' scoped>
.hr {
border-width: 3px;
}
</style>
