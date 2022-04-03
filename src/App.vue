<template>
  <router-view />
</template>

<style lang="postcss">
@import './assets/css/global.css';

html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  color: $dark2;
  background-color: $dark1;
  * {
    box-sizing: border-box;
  }
}

.container {
  max-width: 1140px;
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
  margin: 0 auto;
}
@media (max-width: 900px) {
  .container {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
