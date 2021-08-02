<template>
<div class="careers-wrap">
  <STHeader :activeSection="activeSection" />
  <Careers />
  <STFooter />
</div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const activeSection = ref(null);
    onMounted(() => {
      // Need to wait for render to set up underline
      activeSection.value = 'careers';
    });
    return {
      activeSection,
    };
  },
};
</script>

<style lang="postcss">
.careers-wrap {
  overflow: hidden;
}
</style>
