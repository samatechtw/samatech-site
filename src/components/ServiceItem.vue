<template>
<div class="service-item">
  <div class="service-item-image mobile">
    <img :src="image" :style="{ width: imageWidth }">
  </div>
  <div class="service-item-text">
    <div class="service-item-image desktop">
      <img :src="image" :style="{ width: imageWidth }">
    </div>
    <div class="service-item-title">
      {{ copy.title }}
    </div>
    <ul>
      <li
        v-for="(item, index) in copy.items"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: {
    copy: {
      type: Object,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imageWidth: {
      type: String,
      default: '60px',
    },
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.service-item {
  display: flex;
  align-items: center;
  margin-top: 24px;
  padding: 16px 24px;
  border: 1px solid $purple;

  .service-item-image {
    @mixin flex-center;
    text-align: center;
    height: 68px;
    img {
      align-self: flex-end;
      height: auto;
    }
    &.mobile {
      display: none;
      margin-left: 16px;
    }
  }
  ul {
    @mixin text 20px;
    color: $light2;
    margin-top: 12px;
    line-height: 32px;
    &::marker {
      color: $blue;
    }
  }
  .service-item-title {
    display: flex;
    justify-content: center;
    @mixin text 24px;
    color: $light1;
    text-shadow: 1px 1px 0 $blue;
    letter-spacing: 2px;
    margin-top: 16px;
  }
  @media (max-width: 1060px) {
    align-self: center;
    min-width: 440px;
    .service-item-image {
      &.desktop {
        display: none;
      }
      &.mobile {
        display: block;
        margin-right: 16px;
      }
    }
  }
  @media (max-width: 480px) {
    width: 100%;
    min-width: unset;
    justify-content: center;
    padding-top: 32px;
    .service-item-image {
      margin-right: 16px;
      &.desktop {
        display: block;
      }
      &.mobile {
        display: none;
      }
    }
  }
}
</style>
