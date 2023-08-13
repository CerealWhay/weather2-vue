<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  rainChance: number,
  snowChance: number,
}>()

const precip = computed<number>(() => {
  if (props.rainChance > 0) return props.rainChance
  if (props.snowChance > 0) return props.snowChance
  return 0
})
</script>

<template>
  <div v-if="precip"
       class="precip__wrapper"
  >
    <div class="precip__number">
      {{ precip }}%
    </div>
  </div>
</template>

<style lang="scss">
.precip__wrapper {
  .precip__number {
    text-align: center;
    font-size: 14px;
    font-weight: 200;
  }
}
</style>
