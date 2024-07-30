<template>
  <div class="col-md-6">
    <label
      class="col-form-label-sm"
      :for="field.props.name"
      >{{ field.label }}</label>
    <div class="input-group input-group-sm py-1">

      <template v-if="field.type == 'input'">
        <input
          :id="field.props.name"
          class="form-control"
          :type="field.props?.type"
          v-model="modelValue"
        />
      </template>

      <template v-if="field.type == 'select'">
        <select
          :id="field.props.name"
          class="form-select"
          v-model="modelValue"
        >
          <option selected>Выберите</option>
          <option
            v-for="(option, Opindex) in field.options"
            :key="Opindex"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import flatpickr from 'flatpickr'
import {onMounted, onUnmounted, ref } from 'vue'
import { Russian } from 'flatpickr/dist/l10n/ru.js'

import { Instance } from 'flatpickr/dist/types/instance'
import { FieldType, QueryType } from '@/types/regdoc'

const maxDate = new Date()
const props = defineProps<{
  field: FieldType
}>()
const modelValue = defineModel<QueryType>({ default: {} })

const flatpickrInstance = ref<Instance | null>(null)

onMounted(() => {
  if (props.field.props?.ref === 'date') {
    const input = document.getElementById(
      props.field.props.name
    ) as HTMLInputElement
    flatpickrInstance.value = flatpickr(input, {
      locale: Russian,
      dateFormat: 'd-m-Y',
      minDate: '01.01.2000',
      maxDate: maxDate,
    })
  }
})

onUnmounted(() => {
  if (flatpickrInstance.value) {
    flatpickrInstance.value.destroy()
  }
})
</script>
