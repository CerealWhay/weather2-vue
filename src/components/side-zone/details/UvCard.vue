<script setup lang="ts">
import DetailCardWrapper from "@/components/side-zone/details/DetailCardWrapper.vue";
import {computed} from 'vue';

const props = defineProps<{
  uvValue: number,
}>()

const ValueLineWidth = computed<string>(() => `width: ${(props.uvValue / 12) * 100}%;`)

const ValueLineClass = computed<string>(() => {
  if (props.uvValue <= 2) return 'uv-scale__value-line--green';
  if (props.uvValue <= 5) return 'uv-scale__value-line--yellow';
  if (props.uvValue <= 7) return 'uv-scale__value-line--orange';
  if (props.uvValue <= 10) return 'uv-scale__value-line--red';
  if (props.uvValue <= 12) return 'uv-scale__value-line--blue';
  return '';
})
</script>

<template>
  <detail-card-wrapper
      title="UV Index"
      class="details-card-uv"
  >
    <div class="details-card-uv__value">
      {{uvValue}}
    </div>
    <div class="details-card-uv__scale uv-scale">
      <div class="uv-scale__baseline">
        <div class="uv-scale__dash uv-scale__dash--left">
          <div class="uv-scale__dash-line"></div>
          <div class="uv-scale__num">
            3
          </div>
        </div>
        <div class="uv-scale__dash uv-scale__dash--right">
          <div class="uv-scale__dash-line"></div>
          <div class="uv-scale__num">
            9
          </div>
        </div>
      </div>
      <div class="uv-scale__value-line"
           :class="ValueLineClass"
           :style="ValueLineWidth"
      ></div>
    </div>
  </detail-card-wrapper>
</template>

<style lang="scss">
.details-card-uv {
  .details-card__title {
    text-align: right;
  }

  .details-card-uv__value {
    margin-top: 8px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
  }

  .details-card-uv__scale {
    margin-top: 10px;
    width: 100%;
  }
}

.uv-scale {
  position: relative;

  .uv-scale__baseline {
    position: relative;
    height: 8px;
    width: 100%;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.25);

    .uv-scale__dash {
      position: absolute;
      top: -2px;


      .uv-scale__dash-line {
        width: 1px;
        height: 12px;
        background: #FFF;
      }

      .uv-scale__num {
        position: absolute;
        margin-top: 4px;
        transform: translate(-50%, 0);
        left: 100%;
        font-size: 10px;
        font-weight: 200;
      }

      &--left {
        left: 25%;
      }

      &--right {
        right: 25%;
      }
    }
  }

  .uv-scale__value-line {
    position: absolute;
    height: 100%;
    top: 0;
    border-radius: 3px;

    &--green {
      background: rgba(0, 255, 0, 0.25);
    }

    &--yellow {
      background: rgba(255, 255, 0, 0.25);
    }

    &--orange {
      background: rgba(255, 102, 0, 0.25);
    }

    &--red {
      background: rgba(255, 0, 0, 0.25);
    }

    &--blue {
      background: rgba(0, 0, 255, 0.25);
    }
  }
}
</style>
