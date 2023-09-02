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
    <Transition
        name="fade"
        appear
        mode="out-in"
    >
      <div class="other-detail__value"
           :key="props.value"
      >
        {{ props.value }}
      </div>
    </Transition>
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
