<script setup lang="ts">
import {useApiStore} from "@/stores/apiStore";
import {useSearchStore} from "@/stores/searchStore";

const apiStore = useApiStore()
const searchStore = useSearchStore()

</script>

<template>
  <div v-if="apiStore.searchedCities.length"
       class="searched-cities"
  >
    <div
        v-for="(cityData, key) in apiStore.searchedCities"
        :key="key"
        class="searched-city"
    >
      <div class="searched-city__wrapper"
           @click="searchStore.selectCity(cityData.name)"
      >
        <div class="searched-city__country">
          {{ cityData.country }}
        </div>
        <div class="searched-city__city">
          {{ cityData.name }}
        </div>
      </div>
    </div>
  </div>
  <div v-else class="searched-cities">
    <div class="searched-cities__plug">
      No matching location found.
    </div>
  </div>
</template>

<style lang="scss">
.searched-cities {
  overflow: auto;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 250px;
  padding: 8px 16px;

  border-radius: 3px;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(5px);

  .searched-cities__plug {
    text-align: center;
    font-size: 14px;
    font-weight: 200;
  }
}
.searched-city {
  height: 52px;

  .searched-city__wrapper {
    padding: 8px;
    cursor: pointer;
    background: transparent;
    border-radius: 3px;
    transition: .3s background;
    .searched-city__city {
      font-size: 16px;
      font-weight: 400;
    }
    .searched-city__country {
      text-align: right;
      font-size: 14px;
      font-weight: 200;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.10);
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 18px;
    &:after {
      margin: 8px 0;
      content: '';
      border-radius: 3px;
      background: rgba(255, 255, 255, 0.25);
      width: 100%;
      height: 2px;
      display: block;
    }
  }
}
</style>
