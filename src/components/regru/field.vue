<template>
	<div class="col-md-6">
	  <div class="input-group input-group-sm mb-2">
		<component
		  v-if="field.type !== 'select'"
		  :is="field.type"
		  :id="field.type + index"
		  class="form-control"
		  :type="field.props?.type"
		  :data-id="field.props?.ref"
		  :placeholder="field.label"
		  v-model="Query[field.props.name]"
		></component>
		<select
		  v-else
		  :id="field.type + index"
		   v-model="Query[field.props.name]"
		  class="form-select"
		  :data-id="field.props?.ref"
		 >
		  <option value="" disabled>{{ field.placeholder }}</option>
		  <option v-for="option in field.options" :key="option.value" :value="option.value">
			{{ option.text }}
		  </option>
		</select>
	  </div>
	</div>
  </template>
  
  <script setup lang="ts">
  import flatpickr from 'flatpickr';
  import 'flatpickr/dist/themes/dark.css';
import { defineProps } from 'vue';
import { Russian } from 'flatpickr/dist/l10n/ru.js';
import { Field, Query } from './types';
flatpickr.localize(Russian);

const Query = defineModel({default: () => ({}) as Query});
defineProps<{
  field: Field; // Use the Field type as a prop type
  index: number;
}>();
  



  </script>
  