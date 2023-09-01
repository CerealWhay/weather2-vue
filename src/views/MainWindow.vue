<script setup lang="ts">
import MainZone from "@/components/zones/MainZone.vue";
import SideZone from "@/components/zones/SideZone.vue";
import BottomZone from "@/components/zones/BottomZone.vue";
import ImageBg from "@/components/ImageBg.vue";
import SearchBarMobile from "@/components/SearchBarMobile.vue";
</script>

<template>
  <div class="app-grid">
    <ImageBg
        class="app-grid__bg"
    />

    <div class="app-grid__search-mobile-wrapper">
      <SearchBarMobile />
    </div>

    <MainZone
        class="app-grid__main-zone"
    />

    <div class="app-grid__divider-wrapper">
      <div class="app-grid__divider"></div>
    </div>

    <BottomZone
        class="app-grid__bottom-zone"
    />

    <div class="app-grid__divider-wrapper">
      <div class="app-grid__divider"></div>
    </div>

    <SideZone
        class="app-grid__side-zone"
    />

  </div>
</template>

<style lang="scss">
.app-grid {
  position: relative;
  width: inherit;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  filter: drop-shadow(0px 0px 50px rgba(0, 0, 0, 0.49));

  @include respond-to(handhelds) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .app-grid__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .app-grid__main-zone {
    grid-column: span 2;
  }

  .app-grid__bottom-zone {
    grid-row: 2;
    grid-column: span 2;
  }

  .app-grid__side-zone {
    min-width: 300px;
    grid-row: span 2;
  }

  .app-grid__divider-wrapper {
    display: none;
    padding: 0 16px;

    @include respond-to(handhelds) {
      display: flex;
    }

    .app-grid__divider {
      border-radius: 3px;
      background: rgba(255, 255, 255, 0.25);
      width: 100%;
      height: 8px;
      margin: 32px 0;
    }
  }

  .app-grid__search-mobile-wrapper {
    display: none;
    margin: 32px 0;
    padding: 0 16px;

    @include respond-to(handhelds) {
      display: block;
    }
  }
}
</style>
