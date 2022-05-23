<template>
  <div class="technology-item technology-ethereum">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="800"
      width="1200"
      preserveAspectRatio="xMidYMid"
      viewBox="-38.39985 -104.22675 332.7987 625.3605"
    >
      <path
        class="p1"
        d="M125.166 285.168l2.795 2.79 127.962-75.638L127.961 0l-2.795 9.5z"
      />
      <path class="p2" d="M127.962 287.959V0L0 212.32z" />
      <path
        class="p3"
        d="M126.386 412.306l1.575 4.6L256 236.587l-128.038 75.6-1.575 1.92z"
      />
      <path class="p2" d="M0 236.585l127.962 180.32v-104.72z" />
      <path class="p4" d="M127.961 154.159v133.799l127.96-75.637z" />
      <path class="p5" d="M127.96 154.159L0 212.32l127.96 75.637z" />
    </svg>
    <div class="technology-item-text">
      {{ t('technology.ethereum') }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="postcss" scoped>
@import '/src/assets/css/global.css';

$c1: #343434;
$c2: #8c8c8c;
$c3: #3c3c3b;
$c4: #141414;
$c5: #393939;

.technology-ethereum {
  user-select: none;
  svg {
    width: 54px;
    height: 72px;
  }
  .p1,
  .p2,
  .p3,
  .p4,
  .p5 {
    fill: $border1;
    transition: all 0.4s ease;
  }
  &:hover {
    .p1 {
      fill: $c1;
    }
    .p2 {
      fill: $c2;
    }
    .p3 {
      fill: $c3;
    }
    .p4 {
      fill: $c4;
    }
    .p5 {
      fill: $c5;
    }
    .technology-item-text {
      color: $c2;
    }
  }
}
</style>
