<script setup lang="ts">
import TempRange from '@/components/TempRange.vue'
import WeatherIcon from '@/components/WeatherIcon.vue'
</script>

<template>
  <div class="day-card">
    <div class="day-card__visual">
<!--      <WeatherIcon class="day-card__icon"/>-->
      <div class="day-card__precip-chance-wrapper">
        <div class="day-card__precip-chance">
          17%
        </div>
      </div>
    </div>
<!--    <TempRange-->
<!--        class="day-card__temp-range"-->
<!--        type="camel"-->
<!--    />-->
    <div class="day-card__day-info">
      <div class="day-card__day-of-week">
        Wednessday
      </div>
      <div class="day-card__date">
        03/06
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.day-card {
  position: relative;
  padding: 8px 0;
  display: flex;
  align-items: start;

  .day-card__visual {
    .day-card__icon {
      width: 82px;
      height: 66px;
    }

    .day-card__precip-chance-wrapper {
      height: 17px;

      .day-card__precip-chance {
        text-align: center;
        font-size: 14px;
        font-weight: 200;
      }
    }
  }

  .day-card__temp-range {
    margin-left: 16px;
    margin-top: 17px;
  }

  .day-card__day-info {
    position: absolute;
    top: 8px;
    right: 0;
    text-align: end;

    .day-card__day-of-week {
      font-size: 16px;
      font-weight: 200;
    }

    .day-card__date {
      margin-top: 4px;
      font-size: 12px;
      font-weight: 200;
    }
  }
}
</style>
