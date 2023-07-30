<script setup lang="ts">
import SearchBar from "@/components/side-zone/SearchBar.vue";
import DailyForecast from "@/components/side-zone/DailyForecast.vue";
import Details from "@/components/side-zone/details/Details.vue";
</script>

<template>
  <div class="side-zone">

    <div class="side-zone__top">
      <SearchBar
          class="side-zone__search-bar"
      />
      <DailyForecast
          class="side-zone__daily-forecast"
      />
    </div>

    <div class="side-zone__divider"></div>

    <div class="side-zone__bottom">
      <Details class="side-zone__details"/>
    </div>

  </div>
</template>

<style lang="scss">
.side-zone {
  padding: 16px;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12.5px);

  display: flex;
  flex-direction: column;

  @include respond-to(handhelds) {
    margin-bottom: 32px;
  }

  .side-zone__top {
    height: calc((100% - 4px) / 2);
    display: flex;
    flex-direction: column;
    gap: 24px;

    .side-zone__search-bar {
      @include respond-to(handhelds) {
        display: none;
      }
    }

    .side-zone__daily-forecast {
    }
  }

  .side-zone__bottom {
    height: calc((100% - 4px) / 2);

    .side-zone__details {

    }
  }

  .side-zone__divider {
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.25);
    width: 100%;
    height: 8px;
    @include respond-to(handhelds) {
      margin: 32px 0 16px;
    }
  }
}
</style>
