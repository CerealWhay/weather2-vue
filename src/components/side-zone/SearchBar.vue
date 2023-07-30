<script setup lang="ts">
import {MagnifyingGlassIcon, MapPinIcon} from '@heroicons/vue/24/solid';
</script>

<template>
  <div class="search-bar">
    <div class="search-bar__input-wrapper">
      <input
          type="text"
          class="search-bar__input"
          placeholder="Type city here..."
      >
      <div class="search-bar__search-btn">
        <MagnifyingGlassIcon class="icon search-bar__search-icon"/>
      </div>
    </div>
    <div class="search-bar__geo-btn">
      <MapPinIcon class="icon search-bar__geo-icon"/>
    </div>
  </div>
</template>

<style lang="scss">
.search-bar {
  display: flex;
  align-items: center;
  gap: 16px;

  .search-bar__input-wrapper {
    position: relative;
    width: 100%;

    .search-bar__input {
      width: 100%;
      border-radius: 3px;
      background-color: rgba(255, 255, 255, 0.25);
      transition: .3s background-color;

      color: rgba(255, 255, 255, 1);
      font-size: 16px;
      font-weight: 200;
      padding: 16px 52px 16px 16px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.50);
        transition: .3s color;
      }
    }

    .search-bar__search-btn {
      cursor: pointer;
      position: absolute;
      right: 16px;
      top: 16px;

      .search-bar__search-icon {
        color: rgba(255, 255, 255, 0.50);
        display: block;
        transition: .3s color;
      }

      &:hover {
        .search-bar__search-icon {
          color: rgba(255, 255, 255, 0.75);
        }
      }
    }

    &:hover {
      .search-bar__input {
        background-color: rgba(255, 255, 255, 0.30);

        &::placeholder {
          color: rgba(255, 255, 255, 0.75);
        }
      }
    }
  }

  .search-bar__geo-btn {
    cursor: pointer;

    .search-bar__geo-icon {
      display: block;
      color: rgba(255, 255, 255, 0.50);
      transition: .3s color;
    }

    &:hover {
      .search-bar__geo-icon {
        color: rgba(255, 255, 255, 0.75);
      }
    }
  }
}

.icon {
  width: 20px;
  height: 20px;
}
</style>
