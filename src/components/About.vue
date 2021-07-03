<template>
<div id="about" class="about-wrap">
  <div class="about-bg" />
  <div class="about container">
    <div class="about-title">
      <span :class="{ selected }">
        {{ $t('company') }}
      </span>
    </div>
    <div class="about-text">
      {{ $t('about.text') }}
    </div>
  </div>
  <div class="about-fade" />
</div>
</template>

<script>
export default {
  props: {
    selected: Boolean,
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.about-wrap {
  background-color: $dark1;
  min-height: 840px;
  .about-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-image: url(/src/assets/img/taipei.jpg);
    background-size: cover;
    background-position: 0% center;
  }
  .about-fade {
    width: 100%;
    bottom: 0;
    height: 160px;
    position: absolute;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), $dark1);
  }
  .about {
    position: relative;
    padding-top: 200px;
    color: $light1;
  }
  .about-title {
    @mixin title 48px;
    margin-left: 50%;
  }
  .about-text {
    margin-left: 50%;
    @mixin medium 17px;
    margin-top: 24px;
    color: $light2;
    max-width: 380px;
    line-height: 140%;
  }
  @media (max-width: 600px) {
    display: flex;
    justify-content: flex-end;
    .about-bg {
      background-position: 22% 10%;
    }
    .about-title, .about-text {
      margin-left: 0;
      text-align: right;
    }
    .about-text {
      margin-left: auto;
    }
  }
}

</style>
