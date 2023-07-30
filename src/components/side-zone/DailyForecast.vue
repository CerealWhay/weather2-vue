<script setup lang="ts">
import DayCard from "@/components/side-zone/DayCard.vue";
</script>

<template>
  <div class="daily-forecast">

    <div class="daily-forecast__day-wrapper">
      <DayCard/>
    </div>
    <div class="daily-forecast__day-wrapper">
      <DayCard/>
    </div>
    <div class="daily-forecast__day-wrapper">
      <DayCard/>
    </div>

  </div>
</template>

<style lang="scss">
.daily-forecast {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .daily-forecast__day-wrapper {
    &:not(:last-child) {
      &:after {
        content: '';
        width: 100%;
        height: 2px;
        border-radius: 3px;
        background: rgba(255, 255, 255, 0.25);
        display: block;
      }
    }

  }
}
</style>
