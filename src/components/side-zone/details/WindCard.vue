<script setup lang="ts">
import DetailCardWrapper from "@/components/side-zone/details/DetailCardWrapper.vue";
import {PaperAirplaneIcon} from '@heroicons/vue/24/outline';
import type {TWindSpeed} from "@/types/TWindSpeed";
import {computed} from 'vue';
import {useAppStore} from "@/stores/appStore";

const appStore = useAppStore()

const props = defineProps<{
  windSpeed: TWindSpeed,
  windDirection: string,
  windDirectionDeg: number,
}>()

const windSpeedFixed = computed<number>(() => {
  if (appStore.selectedTempType.type === 'c') return props.windSpeed.k.toFixed(1)
  if (appStore.selectedTempType.type === 'f') return props.windSpeed.m.toFixed(1)
  return 0
})
const speedExt = computed<string>(() => {
  if (appStore.selectedTempType.type === 'c') return 'km/h'
  if (appStore.selectedTempType.type === 'f') return 'mp/h'
  return ''
})

const windDirectionDegStyle = computed<string>(() => {
  return `transform: rotate(${props.windDirectionDeg - 90}deg);`
})

</script>

<template>
  <detail-card-wrapper
      title="Wind Status"
      class="details-card-wind"
  >
    <div class="details-card-wind__speed">
      <div class="details-card-wind__speed-value">
        {{ windSpeedFixed }}
      </div>
      <div class="details-card-wind__speed-desc">
        {{ speedExt }}
      </div>
    </div>
    <div class="details-card-wind__direction">
      <div class="details-card-wind__direction-text">
        {{ windDirection }}
      </div>
      <div class="details-card-wind__direction-pinter">
        <PaperAirplaneIcon
            class="details-card-wind__direction-pinter-icon"
            :style="windDirectionDegStyle"
        />
      </div>
    </div>
  </detail-card-wrapper>
</template>

<style lang="scss">
.details-card-wind {
  .details-card-wind__speed {
    margin-top: 16px;
    display: flex;
    align-items: baseline;

    .details-card-wind__speed-value {
      font-size: 24px;
      font-weight: 600;
      line-height: 17px;
    }

    .details-card-wind__speed-desc {
      font-size: 14px;
      font-weight: 200;
    }
  }

  .details-card-wind__direction {
    margin-top: 8px;
    display: flex;
    gap: 8px;
    justify-content: end;
    align-items: end;

    .details-card-wind__direction-text {
      font-size: 16px;
      font-weight: 200;
    }
    .details-card-wind__direction-pinter {
      width: 32px;
      height: 32px;
      border: 2px solid rgba(255, 255, 255, 0.25);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      .details-card-wind__direction-pinter-icon {
        width: 20px;
        height: 20px;
        display: block;
      }
    }
  }
}
</style>
