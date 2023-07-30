<script setup lang="ts">
import HourForecastSlider from "@/components/bottom-zone/HourForecastSlider.vue";
</script>

<template>
  <div class="bottom-zone">
    <HourForecastSlider class="bottom-zone__hour-forecast"/>
  </div>
</template>

<style lang="scss">
.bottom-zone {
  display: flex;
  align-items: center;

  .bottom-zone__hour-forecast {
    width: 100%;
  }
}
</style>
