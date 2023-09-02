<script setup lang="ts">
import WeatherIcon from "@/components/WeatherIcon.vue";
import PrecipChance from "@/components/PrecipChance.vue";
import type {TForecastHour} from "@/types/api/TForecastHour";
import {computed} from "vue";
import {useTempStore} from "@/stores/tempStore";
import moment from "moment-timezone";
import {useApiStore} from "@/stores/apiStore";

const tempStore = useTempStore()
const apiStore = useApiStore()

const props = defineProps<{
  hourInfo: TForecastHour,
}>()

const mainTempText = computed<string>(() => {
  return tempStore.getTempText({
    tempC: props.hourInfo.temp_c,
    tempF: props.hourInfo.temp_f,
  })
})

const formattedDateText = computed<string>(() => {
  return moment(props.hourInfo.time_epoch * 1000)
      .tz(apiStore.location.tz_id)
      .format('HH A')
})

</script>

<template>
  <div class="hour-card">
    <div class="hour-card__hour">
      {{ formattedDateText }}
    </div>
    <WeatherIcon
        class="hour-card__icon"
        :condition="props.hourInfo.condition"
    />
    <div class="hour-card__precip-chance-wrapper">
      <PrecipChance
          class="hour-card__precip-chance"
          :snow-chance="props.hourInfo.chance_of_snow"
          :rain-chance="props.hourInfo.chance_of_rain"
      />
    </div>
    <Transition
        name="fade"
        appear
        mode="out-in"
    >
      <div class="hour-card__temp"
           :key="mainTempText"
      >
        {{ mainTempText }}
      </div>
    </Transition>

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

  .hour-card__precip-chance-wrapper {
    height: 20px;
    .hour-card__precip-chance {
      height: inherit;
      @include respond-to(handhelds) {
        .precip__number {
          height: 10px;
          font-size: 10px;
        }
      }
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
