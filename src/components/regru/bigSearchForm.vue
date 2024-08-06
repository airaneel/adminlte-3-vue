<template>
  <form @submit.prevent='handleSubmit'>
    <template v-for='(groupFields, groupName, index) in groupedFields' :key='groupName'>

      <hr class='my-2 hr' v-if='index !== 0' />
      <div class='row'>
        <div>{{ groupName }}</div>
        <Field v-for='(field, grindex) in groupFields' :key='grindex' :field='field' :index='grindex'
          v-model='Query[field.props.name]' />
      </div>
    </template>
    <!-- break after each group -->

    <div class='d-grid'>
      <button type='submit' class='btn btn-success'>
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

  import { QueryType } from '@/types/fiields'
  import fields from './form/formData'
  import { Regdoc } from '@/api'
  import logger from '@/utils/logger'

  const Query = reactive<QueryType>({})


  onMounted(() => {
    fields.forEach((field) => {
      if (field.props.name) {
        Query[field.props.name] = undefined // Инициализация с пустыми строками или другими значениями по умолчанию
      }
    })
  })


</script>

<style lang='scss' scoped>
  .hr {
    border-width: 3px;
  }
</style>
