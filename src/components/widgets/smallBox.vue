<template>
  <div class="col-lg-3 col-6">
    <!-- small box -->
    <div :class="['small-box', boxClass]">
      <div class="inner">
        <h3>{{count}}</h3>
        <p>{{ description }}</p>
      </div>

        <FontAwesomeIcon :icon="icon" class="small-box-icon" />
   
      <a :href="link" class="small-box-footer link-light link-underline-opacity-0 link-underline-opacity-50-hover">
        More info <FontAwesomeIcon :icon='faLink' class='icon' size='sm'/>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faBuyNLarge } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';



  // Define the enum for box types to ensure valid values are passed in props
  

enum BoxType {
  primary = 'primary',
  secondary = 'secondary',
  info = 'info',
  warning = 'warning',
  danger = 'danger'
}

const props = defineProps({
  boxType: {
    type: String,
    required: true,
    validator: (value: BoxType) => Object.values(BoxType).includes(value)
  },
  count: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
  icon: {
    type: Object as PropType<IconDefinition>,
     default: () => faBuyNLarge
  }

})

const boxClass = computed(() => `text-bg-${props.boxType}`)
</script>