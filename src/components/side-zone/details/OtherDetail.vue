<script setup lang="ts">
const props = defineProps<{
  title: string,
  value: string,
}>()
</script>

<template>
  <div class="other-detail">
    <div class="other-detail__title">
      {{ props.title }}
    </div>
    <div class="other-detail__value">
      {{ props.value }}
    </div>
  </div>
</template>

<style lang="scss">
.other-detail {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .other-detail__title {
    font-size: 20px;
    font-weight: 200;
  }

  .other-detail__value {
    font-size: 24px;
    font-weight: 400;
  }
}
</style>
