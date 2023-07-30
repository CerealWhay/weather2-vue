<script setup lang="ts">
import DetailCardWrapper from "@/components/side-zone/details/DetailCardWrapper.vue";
import {PaperAirplaneIcon} from '@heroicons/vue/24/outline';
</script>

<template>
  <detail-card-wrapper
      title="Wind Status"
      class="details-card-wind"
  >
    <div class="details-card-wind__speed">
      <div class="details-card-wind__speed-value">
        7.70
      </div>
      <div class="details-card-wind__speed-desc">
        km/h
      </div>
    </div>
    <div class="details-card-wind__direction">
      <div class="details-card-wind__direction-text">
        WSW
      </div>
      <div class="details-card-wind__direction-pinter">
        <PaperAirplaneIcon
            class="details-card-wind__direction-pinter-icon"
            style="transform: rotate(45deg);"
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
