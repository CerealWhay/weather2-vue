<script setup lang="ts">
import TempRange from '@/components/TempRange.vue'
import WeatherIcon from '@/components/WeatherIcon.vue'
import type {TForecastDay} from "@/types/api/TForecastDay";
import type {TTemps} from "@/types/TTemps";
import {computed} from "vue";
import moment from "moment/moment";
import PrecipChance from "@/components/PrecipChance.vue";

const props = defineProps<{
  dayInfo: TForecastDay,
}>()

const minTodayTemp = computed<TTemps>((): TTemps => ({
  tempC: props.dayInfo.day.mintemp_c,
  tempF: props.dayInfo.day.mintemp_f,
}))

const maxTodayTemp = computed<TTemps>((): TTemps => ({
  tempC: props.dayInfo.day.maxtemp_c,
  tempF: props.dayInfo.day.maxtemp_f,
}))

const formattedDateText = computed<string>(() => {
  return moment(props.dayInfo.date_epoch * 1000).format('DD/MM')
})
const formattedDayOfWeekText = computed<string>(() => {
  return moment(props.dayInfo.date_epoch * 1000).format('dddd')
})
</script>

<template>
  <div class="day-card">
    <div class="day-card__visual">
      <WeatherIcon
          class="day-card__icon"
          :condition="props.dayInfo.day.condition"
      />
      <PrecipChance
          class="day-card__precip-chance-wrapper"
          :snow-chance="props.dayInfo.day.daily_chance_of_snow"
          :rain-chance="props.dayInfo.day.daily_chance_of_rain"
      />
    </div>
    <TempRange
        class="day-card__temp-range"
        type="camel"
        :min-values="minTodayTemp"
        :max-values="maxTodayTemp"
    />
    <div class="day-card__day-info">
      <div class="day-card__day-of-week">
        {{ formattedDayOfWeekText }}
      </div>
      <div class="day-card__date">
        {{ formattedDateText }}
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
