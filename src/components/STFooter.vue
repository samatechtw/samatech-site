<template>
  <div class="footer-wrap">
    <svg
      class="footer-top"
      viewBox="0 0 100 50"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 0 50 L 50 1 L 100 50 L 50 1 Z" fill="none" />
    </svg>
    <div class="footer container">
      <div class="footer-left">
        <div class="footer-image">
          <img src="@/assets/img/logo_black.png" />
        </div>
        <div class="footer-left-text">
          <div class="footer-company">
            {{ t('company') }}
          </div>
          <div class="footer-text">
            {{ t('footer.copyright') }}
          </div>
          <div class="footer-text">
            {{ t('footer.rights') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.footer-wrap {
  background-color: $dark1;
  position: relative;
  .footer-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    path {
      stroke: $border1;
      stroke-width: 0.4;
    }
  }
  .footer {
    display: flex;
    justify-content: center;
    padding: 104px 0 64px;
  }
  .footer-left {
    display: flex;
    align-items: center;
    .footer-image img {
      width: 80px;
      margin-right: 16px;
    }
    .footer-company {
      @mixin semibold 18px;
      color: $light2;
      margin-bottom: 8px;
    }
    .footer-text {
      @mixin light 12px;
      color: $light2;
    }
  }
  @media (max-width: 900px) {
    .footer {
      padding-top: 80px;
    }
    .footer-top {
      height: 50px;
    }
  }
}
</style>
