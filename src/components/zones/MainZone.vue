<script setup lang="ts">
import WeatherIcon from "@/components/WeatherIcon.vue";
import TempRange from "@/components/TempRange.vue";
</script>

<template>
  <div class="main-zone">
    <div class="current-info">
      <div class="current-info__temp-now">
        08℃
      </div>
      <div class="current-info__detail">
        <div class="current-info__city">
          Saint Petersburg
        </div>
        <div class="current-info__datetime">
          06:09 PM - Sunday, 6 Oct
        </div>
        <TempRange
            class="current-info__temp-range"
        />
      </div>
    </div>
    <div class="main-zone__weather-icon-wrapper">
      <WeatherIcon
          class="main-zone__weather-icon"
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
