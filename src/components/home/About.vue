<template>
  <div id="about" class="about-wrap">
    <div class="about-bg" />
    <div class="about container">
      <img src="@/assets/img/company.png" class="about-title" />
      <div class="about-text">
        {{ $t('about.text') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  selected: boolean;
}>();
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.home-wrap > .about-wrap {
  background-color: $dark1;
  min-height: 840px;
  position: fixed;
  top: 0;
  width: 100%;
  .about-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-image: url(/src/assets/img/taipei.jpg);
    background-size: cover;
    background-position: 0% center;
  }
  .about {
    position: relative;
    padding-top: 200px;
    color: $light1;
  }
  .about-title {
    width: 320px;
    margin-left: 50%;
  }
  .about-text {
    @mixin medium 17px;
    margin-left: 50%;
    margin-top: 24px;
    color: $light2;
    max-width: 380px;
    line-height: 140%;
  }
  @media (max-width: 600px) {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    .about-bg {
      background-position: 22% 10%;
    }
    .about-title,
    .about-text {
      margin-left: 0;
    }
    .about-title {
      width: 260px;
    }
    .about-text {
      margin-left: auto;
      max-width: 280px;
    }
  }
}
</style>
