<script setup lang="ts">
import WeatherIcon from "@/components/WeatherIcon.vue";
</script>

<template>
  <div class="hour-card">
    <div class="hour-card__hour">
      14 PM
    </div>
<!--    <WeatherIcon class="hour-card__icon"/>-->
    <div class="hour-card__precip-chance">
      17%
    </div>
    <div class="hour-card__temp">
      19℃
    </div>
  </div>
</template>

<style lang="scss">
.hour-card {
  width: 132px;
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  @include respond-to(handhelds) {
    width: 91px;
      padding: 0 8px;
  }

  .hour-card__hour {
    height: 30px;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    @include respond-to(handhelds) {
      height: 30px;
      font-size: 14px;
    }
  }

  .hour-card__icon {
    width: 100%;
    height: 70px;
    @include respond-to(handhelds) {
      width: 75px;
      height: 50px;
    }
  }

  .hour-card__precip-chance {
    text-align: center;
    font-size: 14px;
    font-weight: 200;
    height: 20px;
    @include respond-to(handhelds) {
      height: 10px;
      font-size: 10px;
    }
  }

  .hour-card__temp {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    height: 30px;
    @include respond-to(handhelds) {
      height: 20px;
      font-size: 14px;
    }
  }
}
</style>
