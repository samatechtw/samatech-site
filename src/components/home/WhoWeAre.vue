<template>
  <div id="who" class="who-wrap">
    <div class="who-top-fade-wrap">
      <div class="who-top-fade" />
    </div>
    <div class="who-bg" />
    <div class="who-bg-overlay" />
    <div class="who container">
      <div class="who-left">
        <div class="who-title">
          {{ t('who.title') }}
        </div>
        <div class="who-text-wrap">
          <div class="who-text">
            {{ t('who.text1') }}
          </div>
          <div class="who-text">
            {{ t('who.text2') }}
          </div>
        </div>
      </div>
      <div class="who-right"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
  selected: Boolean,
});
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

$bg-color: #0f1217;
$bg-height: calc(100% + 100px);
$bg-clip: polygon(0 0, 100% 13%, 100% 100%, 0% 87%);

.who-wrap {
  background-color: $dark1;
  color: $light1;
  position: relative;
  min-height: 700px;
  height: 80vh;
  margin-top: 840px;
  .who-top-fade-wrap {
    position: absolute;
    width: 100%;
    height: 600px;
    top: -480px;
    overflow-x: hidden;
    overflow-y: visible;
  }
  .who-top-fade {
    bottom: 165px;
    width: calc(100% + 100px);
    height: 200px;
    left: -100px;
    overflow-y: visible;
    position: absolute;
    background-image: linear-gradient(to bottom, rgba($bg-color, 0), $bg-color);
    transform: rotate(4deg);
    transform-origin: 50% 100%;
  }
  .who-bg {
    width: 100%;
    height: $bg-height;
    position: absolute;
    top: -100px;
    background-image: url(/src/assets/img/who.jpg);
    background-size: cover;
    background-position: 0% center;
    clip-path: $bg-clip;
  }
  .who-bg-overlay {
    width: 100%;
    height: calc(100% + 100px);
    position: absolute;
    top: -100px;
    background-color: rgba($dark1, 0.5);
    clip-path: $bg-clip;
  }
  .who {
    padding-top: 100px;
    padding-bottom: 96px;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .who-left {
    @mixin medium 18px;
    line-height: 150%;
  }
  .who-title {
    @mixin title 48px;
    margin-bottom: 40px;
  }
  .who-text-wrap {
    border: 1px solid rgba(#ffffff, 0.2);
    padding: 0 24px 24px;
    background-color: rgba(#000, 0.3);
  }
  .who-text {
    max-width: 640px;
    margin-top: 24px;
  }
  @media (max-width: 600px) {
    .who {
      padding-top: 80px;
      padding-bottom: 72px;
    }
  }
}
</style>
