<template>
  <span>
    <span ref="textSpan">{{ activeText }}</span>
    <Spinner v-if="loading || !text" :size="spinnerSize" />
  </span>
</template>

<script lang="ts" setup>
import { toRefs, computed, onMounted, ref } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: null,
  },
  loading: Boolean,
});

const { text, loading } = toRefs(props);
const textSpan = ref();
const spinnerSize = ref(18);

const activeText = computed(() => {
  if (loading.value) {
    return null;
  }
  return text.value || ' ';
});

onMounted(() => {
  const height = textSpan.value.offsetHeight;
  spinnerSize.value = Math.max(18, height) - 8;
});
</script>
