<template>
<span>
  <span ref="textSpan">{{ activeText }}</span>
  <Spinner v-if="loading || !text" :size="spinnerSize" />
</span>
</template>

<script>
import { toRefs, computed, onMounted, ref } from 'vue';

export default {
  props: {
    text: {
      type: String,
      default: null,
    },
    loading: Boolean,
  },
  setup(props) {
    const { text, loading } = toRefs(props);
    const textSpan = ref(null);
    const spinnerSize = ref(18);

    const activeText = computed(() => {
      if(loading.value) {
        return null;
      }
      return text.value || ' ';
    });
    onMounted(() => {
      const height = textSpan.value.offsetHeight;
      spinnerSize.value = Math.max(18, height) - 8;
    });
    return {
      activeText,
      textSpan,
      spinnerSize,
    };
  },
};
</script>
