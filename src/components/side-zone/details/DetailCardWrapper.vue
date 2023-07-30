<script setup lang="ts">
const props = defineProps<{
  title: string,
}>()
</script>

<template>
  <div class="details-card">
    <div class="details-card__title">
      {{ props.title }}
    </div>

    <slot></slot>

  </div>
</template>

<style lang="scss">
.details-card {
  padding: 8px 16px;
  width: 100%;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.25);

  .details-card__title {
    font-size: 14px;
    font-weight: 200;
  }
}
</style>
