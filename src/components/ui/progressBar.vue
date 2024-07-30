<template>
  <!-- PROGRESS BAR -->
  <div
    class="progress"
    style="height: 1px; margin-top: 10px"
  >
    <div
      v-show="props.loading"
      class="progress-bar"
      role="progressbar"
      :style="{ width: progress + '%' }"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</template>
<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue'

const props = defineProps<{ loading: boolean }>()

const progress = ref(0)

let interval: number | NodeJS.Timeout

const updateProgress = (value: number) => {
  // Ограничение максимального значения прогресса 100%
  progress.value = Math.min(value, 100)
}

const simulateProgress = () => {
  if (props.loading) {
    interval = setInterval(
      () => {
        const increment = Math.floor(Math.random() * 5 + 10)
        updateProgress(progress.value + increment)
        // Очистка интервала, если прогресс достиг или превысил 100%
        if (progress.value >= 100) {
          clearInterval(interval)
        }
      },
      Math.random() * 500 + 100
    )
  } else {
    updateProgress(100)
    clearInterval(interval)
    progress.value = 0
  }
}
watch(() => props.loading, simulateProgress)

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>
