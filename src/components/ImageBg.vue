<script setup lang="ts">
import {useApiStore} from "@/stores/apiStore";

const apiStore = useApiStore()
</script>

<template>
  <div class="image-bg">
    <Transition
        name="fade-short"
        appear
        mode="out-in"
    >
      <img
          :src="apiStore.getBgSrc"
          :key="apiStore.getBgSrc"
          alt=""
          class="image-bg-img"
      >
    </Transition>
  </div>
</template>

<style lang="scss">
.image-bg {
  .image-bg-img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
    filter: brightness(75%);
  }
}
</style>
