<script setup lang="ts">
import type {TCondition} from "@/types/api/TCondition";

const props = defineProps<{
  condition: TCondition
}>()
</script>

<template>
  <div class="weather-icon">
    <div class="weather-icon__img-wrapper">
      <img
          class="weather-icon__img"
          :src="props.condition.icon"
          :alt="props.condition.text"
      >
    </div>
  </div>
</template>

<style lang="scss">
.weather-icon {
  .weather-icon__img-wrapper {
    width: 100%;
    height: 100%;
    .weather-icon__img {
      display: block;
      width: inherit;
      height: inherit;
      object-position: center;
      object-fit: contain;
    }
  }
}
</style>
