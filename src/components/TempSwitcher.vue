<script setup lang="ts">
</script>

<template>
  <div class="temp-switcher">
    <div class="temp-switcher__type temp-switcher__type--selected">
      ℃
    </div>
    <div class="temp-switcher__divider"></div>
    <div class="temp-switcher__type">
      ℉
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

    &:hover {
      color: #FFFFFF;
    }

    &--selected {
      color: rgba(255, 255, 255, 0.85);
    }
  }

  .temp-switcher__divider {
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.25);
    height: 2px;
    width: 100%;
  }
}
</style>
