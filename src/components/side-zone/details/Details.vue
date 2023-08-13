<script setup lang="ts">
import OtherDetail from "@/components/side-zone/details/OtherDetail.vue";
import WindCard from "@/components/side-zone/details/WindCard.vue";
import UvCard from "@/components/side-zone/details/UvCard.vue";
import {computed} from 'vue';
import {useAppStore} from "@/stores/appStore";
import {useApiStore} from "@/stores/apiStore";

const apiStore = useApiStore()
const appStore = useAppStore()

const realFeelBlock = computed(() => {
  const value = appStore.getTempText({
    tempC: apiStore.current.feelslike_c,
    tempF: apiStore.current.feelslike_f,
  })
  return {
    label: 'Real Feel',
    value: value,
  }
})

const precipitationBlock = computed(() => ({
  label: 'Precipitation',
  value: `${apiStore.current.precip_mm} mm`,
}))

const humidityBlock = computed(() => ({
  label: 'Humidity',
  value: `${apiStore.current.humidity}%`,
}))

</script>

<template>
  <div class="current-details">
    <div class="current-details__title">
      Details
    </div>
    <div class="current-details__wind-uv">
      <WindCard
      />
      <UvCard
          :uv-value="apiStore.current.uv"
      />
    </div>
    <div class="current-details__other-details">
      <OtherDetail
          :title="realFeelBlock.label"
          :value="realFeelBlock.value"
      />
      <OtherDetail
          :title="precipitationBlock.label"
          :value="precipitationBlock.value"
      />
      <OtherDetail
          :title="humidityBlock.label"
          :value="humidityBlock.value"
      />
    </div>
  </div>
</template>

<style lang="scss">
.current-details {
  margin: 16px 0;
  height: 100%;
  overflow: auto;

  .current-details__title {
    font-size: 24px;
    font-weight: 200;
    margin-bottom: 16px;
  }

  .current-details__wind-uv {
    display: flex;
    gap: 16px;
  }

  .current-details__other-details {
    padding: 0 16px;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
}
</style>
