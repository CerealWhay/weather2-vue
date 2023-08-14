<script setup lang="ts">
import {MagnifyingGlassIcon, MapPinIcon} from '@heroicons/vue/24/solid';
import {useAppStore} from "@/stores/appStore";

const appStore = useAppStore()

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
      >
    </div>

    <div class="search-bar-mobile__btn"
         @click="appStore.selectTempType(appStore.notSelectedTempType)"
    >
      <div class="mobile-icon search-bar-mobile__icon">
        {{ appStore.notSelectedTempType.symbol }}
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
