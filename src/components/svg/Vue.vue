<template>
<div class="technology-item technology-vue">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69">
    <path class="p1" d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" />
    <path fill="#34495e" d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z"/>
  </svg>
  <div class="technology-item-text">
    {{ $t('technology.vue') }}
  </div>
</div>
</template>

<style lang="postcss" scoped>
@import '/src/assets/css/global.css';

.technology-vue {
  user-select: none;
  svg {
    width: 54px;
    height: 54px;
  }
  path {
    fill: $border1;
    transition: all 0.4s ease;
  }
  &:hover {
    .p1 {
      fill: #41b883;
    }
    .p2 {
      fill: #366994;
    }
    .technology-item-text {
      color: #41b883;
    }
  }
}

</style>
