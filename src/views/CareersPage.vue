<template>
  <div class="careers-wrap">
    <STHeader :activeSection="activeSection" />
    <Careers />
    <STFooter />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const activeSection = ref();

onMounted(() => {
  // Need to wait for render to set up underline
  activeSection.value = 'careers';
});
</script>

<style lang="postcss">
.careers-wrap {
  overflow: hidden;
}
</style>
