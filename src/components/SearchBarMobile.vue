<script setup lang="ts">
import {MagnifyingGlassIcon, MapPinIcon} from '@heroicons/vue/24/solid';
import {useTempStore} from "@/stores/tempStore";
import {useSearchStore} from "@/stores/searchStore";
import SearchedCities from "@/components/SearchedCities.vue";

const tempStore = useTempStore()
const searchStore = useSearchStore()

</script>

<template>
  <div class="search-bar-mobile">

    <div class="search-bar-mobile__btn">
      <MapPinIcon class="mobile-icon search-bar-mobile__icon"/>
    </div>
    <div class="search-bar-mobile__btn">
      <MagnifyingGlassIcon class="mobile-icon search-bar-mobile__icon"/>
    </div>

    <div class="search-bar-mobile__input-wrapper">
      <input
          type="text"
          class="search-bar-mobile__input"
          placeholder="Type city here..."
          @keyup.enter="searchStore.selectCity(searchStore.searchString)"
          v-model="searchStore.searchString"
      >
      <SearchedCities
          v-if="searchStore.isSearchSelectorOpen"
          class="search-bar-mobile__searched-cities"
      />
    </div>

    <div class="search-bar-mobile__btn"
         @click="tempStore.selectTempType(tempStore.notSelectedTempType)"
    >
      <div class="mobile-icon search-bar-mobile__icon">
        {{ tempStore.notSelectedTempType.symbol }}
      </div>
    </div>

  </div>
</template>

<style lang="scss">
.search-bar-mobile {
  display: flex;
  align-items: center;
  gap: 16px;

  .search-bar-mobile__input-wrapper {
    width: 100%;
    position: relative;

    .search-bar-mobile__input {
      width: 100%;
      border-radius: 3px;
      background-color: rgba(255, 255, 255, 0.25);
      transition: .3s background-color;

      color: rgba(255, 255, 255, 1);
      font-weight: 200;
      padding: 8px;
      font-size: 14px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.50);
        transition: .3s color;
      }
    }
    
    .search-bar-mobile__searched-cities {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
    }
  }

  .search-bar-mobile__btn {

    .search-bar-mobile__icon {
      color: rgba(255, 255, 255, 0.50);
      display: flex;
      align-items: center;
      transition: .3s color;

      text-align: center;
      font-size: 24px;
      font-weight: 600;
    }

    &:hover {
      .search-bar-mobile__icon {
        color: rgba(255, 255, 255, 0.75);
      }
    }
  }
}

.mobile-icon {
  width: 32px;
  height: 32px;
}
</style>
