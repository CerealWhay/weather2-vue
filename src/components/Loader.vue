<script setup lang="ts">
import {useApiStore} from "@/stores/apiStore";

const apiStore = useApiStore()
</script>

<template>
  <Transition name="fade" mode="out-in">
    <div v-if="apiStore.isLoading" class="loader">
      <div class="loader__circle loader__circle--1"></div>
      <div class="loader__circle loader__circle--2"></div>
      <div class="loader__circle loader__circle--3"></div>
      <div class="loader__circle loader__circle--4"></div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
$max_size: 100px;
$color: rgba(255, 255, 255, 0.75);

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.50);
  z-index: 99;

  .loader__circle {
    position: absolute;
    border: 2px solid $color;
    border-radius: 50%;
    overflow: hidden;
    &:before,
    &:after
    {
      content: '';
      width: 25%;
      height: 25%;
      display: block;
      background: $color;
      position: absolute;
      top: 50%;
      rotate: 45deg;
    }
    &:before {
      left: 0;
      translate: -50% -50%;
    }
    &:after {
      right: 0;
      translate: 50% -50%;
    }

    &--1 {
      width: $max_size;
      height: $max_size;
      animation: rotation 1s infinite reverse ease-in-out;
    }
    &--2 {
      width: calc($max_size / 2);
      height: calc($max_size / 2);
      animation: rotation 1s infinite normal ease-in-out;
    }
    &--3 {
      width: calc($max_size / 4);
      height: calc($max_size / 4);
      animation: rotation 1s infinite reverse ease-in-out;
    }
    &--4 {
      width: calc($max_size / 8);
      height: calc($max_size / 8);
      animation: rotation 1s infinite normal ease-in-out;
    }
  }
}
</style>