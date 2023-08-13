<script setup lang="ts">
import WeatherIcon from "@/components/WeatherIcon.vue";
import TempRange from "@/components/TempRange.vue";
import {useApiStore} from "@/stores/apiStore"
import {useAppStore} from "@/stores/appStore";
import {computed} from "vue";
import moment from 'moment-timezone';
import type {TTemps} from "@/types/TTemps";


const apiStore = useApiStore()
const appStore = useAppStore()

const mainTempText = computed<string>(() => {
  return appStore.getTempText({
    tempC: apiStore.current.temp_c,
    tempF: apiStore.current.temp_f,
  })
})

const formattedDateText = computed<string>(() => {
  return moment(apiStore.location.localtime_epoch * 1000)
      .tz(apiStore.location.tz_id)
      .format('HH:mm A - dddd, D MMM')
})

const minTodayTemp = computed<TTemps>((): TTemps => ({
  tempC: apiStore.forecastDay[0].day.mintemp_c,
  tempF: apiStore.forecastDay[0].day.mintemp_f,
}))

const maxTodayTemp = computed<TTemps>((): TTemps => ({
  tempC: apiStore.forecastDay[0].day.maxtemp_c,
  tempF: apiStore.forecastDay[0].day.maxtemp_f,
}))
</script>

<template>
  <div class="main-zone">
    <div class="current-info">
      <div class="current-info__temp-now">
        {{ mainTempText }}
      </div>
      <div class="current-info__detail">
        <div class="current-info__city">
          {{ apiStore.location.name }}
        </div>
        <div class="current-info__datetime">
          {{ formattedDateText }}
        </div>
        <TempRange
            class="current-info__temp-range"
            :min-values="minTodayTemp"
            :max-values="maxTodayTemp"
        />
      </div>
    </div>
    <div class="main-zone__weather-icon-wrapper">
      <WeatherIcon
          class="main-zone__weather-icon"
          :condition="apiStore.current.condition"
      />
    </div>
  </div>
</template>

<style lang="scss">
.main-zone {
  padding: 16px;

  @include respond-to(handhelds) {
    padding: 0 16px;
  }

  .current-info {
    display: flex;
    gap: 16px;
    align-items: center;

    @include respond-to(tablets) {
      flex-direction: column;
    }
    @include respond-to(handhelds) {
      flex-direction: column;
    }

    .current-info__temp-now {
      text-align: center;
      font-size: 128px;
      font-weight: 200;

      @include respond-to(tablets) {
        width: 100%;
        text-align: left;
      }
    }

    .current-info__detail {
      width: 100%;

      .current-info__city {
        font-size: 32px;
        font-weight: 200;
      }

      .current-info__datetime {
        font-size: 16px;
        font-weight: 600;
      }

      .current-info__temp-range {
        @include respond-to(handhelds) {
          justify-content: end;
        }
      }
    }
  }

  .main-zone__weather-icon-wrapper {
    display: flex;
    @include respond-to(handhelds) {
      justify-content: end;
    }

    .main-zone__weather-icon {
      width: 80px;
      height: 80px;
    }
  }
}
</style>
