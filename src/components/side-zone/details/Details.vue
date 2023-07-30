<script setup lang="ts">
import OtherDetail from "@/components/side-zone/details/OtherDetail.vue";
import WindCard from "@/components/side-zone/details/WindCard.vue";
import UvCard from "@/components/side-zone/details/UvCard.vue";
</script>

<template>
  <div class="current-details">
    <div class="current-details__title">
      Details
    </div>
    <div class="current-details__wind-uv">
      <WindCard
          class="current-details__card"
      />
      <UvCard
          class="current-details__card"
      />
    </div>
    <div class="current-details__other-details">
      <OtherDetail
          class="current-details__other-detail"
          title="Real Feel"
          value="08℃"
      />
      <OtherDetail
          class="current-details__other-detail"
          title="Precipitation"
          value="8 mm"
      />
      <OtherDetail
          class="current-details__other-detail"
          title="Humidity"
          value="62%"
      />
    </div>
  </div>
</template>

<style lang="scss">
.current-details {
  padding: 16px 0;

  .current-details__title {
    font-size: 24px;
    font-weight: 200;
    margin-bottom: 16px;
  }

  .current-details__wind-uv {
    display: flex;
    gap: 16px;

    .current-details__card {
    }
  }

  .current-details__other-details {
    padding: 0 16px;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    .current-details__other-detail {
    }
  }
}
</style>
