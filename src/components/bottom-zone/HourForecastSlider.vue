<script setup lang="ts">
import HourCard from "@/components/bottom-zone/HourCard.vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation} from 'swiper/modules';
import {ref} from 'vue';

const modules = ref([Navigation])
</script>

<template>
  <div class="hour-forecast">
    <swiper
        :slides-per-view="'auto'"
        :navigation="true"
        :modules="modules"
        class="hour-forecast__slider"
    >
      <swiper-slide
          class="hour-forecast__hour-card-wrapper"
      >
        <div class="hour-forecast__hour-card-wrapper">
          <HourCard/>
        </div>
      </swiper-slide>
      <swiper-slide
          class="hour-forecast__hour-card-wrapper"
      >
        <div class="hour-forecast__hour-card-wrapper">
          <HourCard/>
        </div>
      </swiper-slide>
      <swiper-slide
          class="hour-forecast__hour-card-wrapper"
      >
        <div class="hour-forecast__hour-card-wrapper">
          <HourCard/>
        </div>
      </swiper-slide>
      <swiper-slide
          class="hour-forecast__hour-card-wrapper"
      >
        <div class="hour-forecast__hour-card-wrapper">
          <HourCard/>
        </div>
      </swiper-slide>
      <swiper-slide
          class="hour-forecast__hour-card-wrapper"
      >
        <div class="hour-forecast__hour-card-wrapper">
          <HourCard/>
        </div>
      </swiper-slide>
      <swiper-slide
          class="hour-forecast__hour-card-wrapper"
      >
        <div class="hour-forecast__hour-card-wrapper">
          <HourCard/>
        </div>
      </swiper-slide>
      <swiper-slide
          class="hour-forecast__hour-card-wrapper"
      >
        <div class="hour-forecast__hour-card-wrapper">
          <HourCard/>
        </div>
      </swiper-slide>
      <swiper-slide
          class="hour-forecast__hour-card-wrapper"
      >
        <div class="hour-forecast__hour-card-wrapper">
          <HourCard/>
        </div>
      </swiper-slide>
      <swiper-slide
          class="hour-forecast__hour-card-wrapper"
      >
        <div class="hour-forecast__hour-card-wrapper">
          <HourCard/>
        </div>
      </swiper-slide>
      <swiper-slide
          class="hour-forecast__hour-card-wrapper"
      >
        <div class="hour-forecast__hour-card-wrapper">
          <HourCard/>
        </div>
      </swiper-slide>
      <swiper-slide
          class="hour-forecast__hour-card-wrapper"
      >
        <div class="hour-forecast__hour-card-wrapper">
          <HourCard/>
        </div>
      </swiper-slide>
      <swiper-slide
          class="hour-forecast__hour-card-wrapper"
      >
        <div class="hour-forecast__hour-card-wrapper">
          <HourCard/>
        </div>
      </swiper-slide>
      <swiper-slide
          class="hour-forecast__hour-card-wrapper"
      >
        <div class="hour-forecast__hour-card-wrapper">
          <HourCard/>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
.hour-forecast {
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12.5px);
  position: relative;

  &:before {
    pointer-events: none;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 64px;
    z-index: 10;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%);
  }

  &:after {
    pointer-events: none;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 64px;
    z-index: 10;
    background: linear-gradient(270deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%);
  }

  .hour-forecast__slider {
    padding: 16px;
    overflow: hidden;

    @include respond-to(handhelds) {
      padding: 16px 8px;
    }

    .swiper-wrapper {
      display: flex;

      .hour-forecast__hour-card-wrapper {
        &:not(:last-child) {
          display: flex;

          &:after {
            content: '';
            width: 2px;
            height: 100%;
            border-radius: 3px;
            background: rgba(255, 255, 255, 0.25);
            display: block;
          }
        }
      }
    }

    .swiper-button-prev,
    .swiper-button-next,
    {
      cursor: pointer;
      width: 32px;
      height: 32px;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      z-index: 11;

      background-color: rgba(255, 255, 255, 0.25);
      transition: .3s background-color;
      border-radius: 50%;
      filter: blur(1px);
      display: flex;
      align-items: center;
      justify-content: center;

      @include respond-to(handhelds) {
        display: none;
      }

      &:before {
        content: '';
        width: 20px;
        height: 20px;
        background-position: center;
        background-repeat: no-repeat;
        display: block;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.35);
      }

      &.swiper-button-disabled {
        pointer-events: none;
        background-color: rgba(255, 255, 255, 0.10);
      }
    }

    .swiper-button-prev {
      left: 16px;

      &:before {
        margin-right: 2px;
        background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.125 16.25L6.875 10L13.125 3.75' stroke='white' stroke-opacity='0.75' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      }
    }

    .swiper-button-next {
      right: 16px;

      &:before {
        margin-left: 2px;
        background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.875 3.75L13.125 10L6.875 16.25' stroke='white' stroke-opacity='0.75' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      }
    }
  }
}


</style>
