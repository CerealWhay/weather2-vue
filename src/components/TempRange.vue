<script setup lang="ts">
import {computed} from 'vue'
import type {TTemps} from "@/types/TTemps";
import {useTempStore} from "@/stores/tempStore";

const tempStore = useTempStore()

const props = defineProps<{
  type?: string,
  minValues: TTemps,
  maxValues: TTemps,
}>()

const additionalClasses = computed(() => {
  return {
    'temp-range--camel': props.type === 'camel',
  }
})
</script>

<template>
  <div class="current-info__temp-range temp-range"
       :class="additionalClasses"
  >
    <div class="temp-range__start">
      {{ tempStore.getTempText(props.maxValues) }}
    </div>
    <div class="temp-range__divider"></div>
    <div class="temp-range__end">
      {{ tempStore.getTempText(props.minValues) }}
    </div>
  </div>
</template>

<style lang="scss">
.temp-range {
  display: flex;
  gap: 4px;
  align-items: center;

  .temp-range__start {
    text-align: center;
    font-size: 20px;
    font-weight: 200;
  }

  .temp-range__divider {
    border-radius: 3px;
    background: #FFF;
    width: 16px;
    height: 1px;
  }

  .temp-range__end {
    text-align: center;
    font-size: 20px;
    font-weight: 200;
  }

  &--camel {
    .temp-range__start {
      font-size: 26px;
      font-weight: 400;
    }

    .temp-range__end {
      font-size: 14px;
    }
  }
}
</style>
