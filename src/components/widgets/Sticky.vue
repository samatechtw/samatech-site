<template>
  <div class="sticky" :style="{ top: `${top}px` }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  top: {
    // sticky y-position in pixels
    type: Number,
    default: 0,
  },
});
</script>

<style lang="postcss" scoped>
.sticky {
  position: sticky;
  z-index: 1000;
  top: 0;
}
</style>
