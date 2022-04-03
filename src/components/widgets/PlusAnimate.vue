<template>
  <div class="plus-animate" :class="open ? 'opened' : 'closed'">
    <div class="plus-animate-horizontal" />
    <div class="plus-animate-vertical" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  open: Boolean,
});
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.plus-animate {
  height: 26px;
  position: relative;
  top: 7px;
  cursor: pointer;
  .plus-animate-horizontal,
  .plus-animate-vertical {
    position: absolute;
    background-color: $light2;
    transition: all 0.4s ease-in-out;
  }
  .plus-animate-horizontal {
    width: 25px;
    height: 5px;
    margin-left: -15px;
    margin-top: -5.5px;
  }
  .plus-animate-vertical {
    width: 5px;
    height: 25px;
    margin-left: -5px;
    margin-top: -15px;
  }
  &.closed {
    .plus-animate-vertical {
      transform: rotate(-90deg);
    }
    .plus-animate-horizontal {
      transform: rotate(-90deg);
      opacity: 1;
    }
  }
  &.opened {
    opacity: 1;
    .plus-animate-vertical {
      transform: rotate(90deg);
      background-color: $light1;
    }
    .plus-animate-horizontal {
      transform: rotate(90deg);
      opacity: 0;
    }
  }
}
</style>
