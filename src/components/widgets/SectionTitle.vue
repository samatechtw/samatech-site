<template>
<div class="title-wrap">
  <div class="title-bg">
    {{ textBg || text }}
  </div>
  <div class="section-title">
    <span :class="{ selected }">
      {{ text }}
    </span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    textBg: {
      type: String,
      default: null,
    },
    selected: Boolean,
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.title-wrap {
  position: relative;
  text-align: center;
  .title-bg {
    @mixin title 56px;
    opacity: 10%;
    font-size: 64px;
  }
  .section-title {
    position: relative;
    top: -52px;
  }
  @media (max-width: 600px) {
    .section-title {
      font-size: 26px;
      top: -43px;
    }
    .title-bg {
      font-size: 48px;
    }
  }
}
</style>
