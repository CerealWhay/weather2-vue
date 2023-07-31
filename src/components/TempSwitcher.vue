<script setup lang="ts">
import {useAppStore} from "@/stores/appStore"

const appStore = useAppStore()

const isTempTypeSelected = (typeName: string): Boolean => {
  return typeName === appStore.selectedTempType.name
}
</script>

<template>
  <div class="temp-switcher">
    <div
        v-for="(type, key) of appStore.tempTypes"
        :key="key"
        class="temp-switcher__type-wrapper"
    >
      <div
          @click="appStore.selectTempType(type)"
          class="temp-switcher__type"
          :class="{'temp-switcher__type--selected': isTempTypeSelected(type.name)}"
      >
        {{ type.symbol }}
      </div>
      <div class="temp-switcher__divider"></div>
    </div>
  </div>
</template>

<style lang="scss">
.temp-switcher {
  width: 50px;
  border-radius: 0 3px 3px 0;
  background: rgba(255, 255, 255, 0.25);
  padding: 8px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  .temp-switcher__type-wrapper {
    .temp-switcher__type {
      cursor: pointer;
      height: 33px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 24px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.50);
      transition: .3s color;
      flex-direction: column;

      &:hover {
        color: #FFFFFF;
      }

      &--selected {
        color: rgba(255, 255, 255, 0.85);
      }
    }

    .temp-switcher__divider {
      margin-top: 8px;
      border-radius: 3px;
      background: rgba(255, 255, 255, 0.25);
      height: 2px;
      width: 100%;
    }

    &:last-of-type {
      .temp-switcher__divider {
        display: none;
      }
    }
  }
}
</style>
