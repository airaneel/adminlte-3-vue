<template>
  <div class="transparent-box">
    <span>{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  value: any
}>()

const value = JSON.stringify(props.value, null, 4)

</script>

<style scoped>
.transparent-box {
position: fixed;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 300px;
  overflow: auto;
  text-wrap: balance;
  background-color: rgba(0, 0, 0, 0.191); /* Полупрозрачный белый фон */
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Легкая тень */
  z-index: 5000; /* Поверх всех остальных элементов */
}
</style>
