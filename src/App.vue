<script setup lang="ts">
import MainWindow from "@/views/MainWindow.vue";
import ImageBg from "@/components/ImageBg.vue";
import TempSwitcher from "@/components/TempSwitcher.vue";
import { useApiStore } from "@/stores/apiStore"
import { onMounted } from 'vue'
import Loader from "@/components/Loader.vue";

const apiStore = useApiStore()

onMounted(async () => {
  await apiStore.getWeatherCity()
})

</script>

<template>
  <div class="main-wrapper">
    <Loader
        class="main-wrapper__loader"
    />
    <ImageBg
        class="main-wrapper__bg"
    />
    <TempSwitcher
        class="main-wrapper__temp-switcher"
    />
    <div class="container">
      <MainWindow/>
    </div>
  </div>
</template>

<style lang="scss">
.main-wrapper {
  position: relative;

  .main-wrapper__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: black;

    img {
      opacity: 0.25;
    }
  }

  .main-wrapper__temp-switcher {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 20;

    @include respond-to(handhelds) {
      display: none;
    }
  }
}
</style>
