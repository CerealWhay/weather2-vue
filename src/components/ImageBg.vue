<script setup lang="ts">
import {ref} from "vue";
import bg from "@/assets/images/bg-test.jpg";
import bg2 from "@/assets/images/bg2.jpeg";

const bgLink = ref(bg2)
</script>

<template>
  <div class="image-bg">
    <img
        :src="bgLink"
        alt=""
        class="image-bg-img"
    >
  </div>
</template>

<style lang="scss">
.image-bg {
  .image-bg-img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: 0 0;
    filter: brightness(75%);
  }
}
</style>
