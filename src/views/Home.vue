<template>
  <div class="home-wrap">
    <STHeader :activeSection="activeSection" />
    <About ref="about" :selected="activeSection === 'about'" />
    <Services ref="services" :selected="activeSection === 'services'" />
    <Technology ref="technology" :selected="activeSection === 'technology'" />
    <Contact ref="contact" :selected="activeSection === 'contact'" />
    <STFooter />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { debounce } from '@/utils/page';
import About from '@/components/home/About.vue';
import Services from '@/components/home/Services.vue';
import Technology from '@/components/home/Technology.vue';
import Contact from '@/components/home/Contact.vue';

const activeSection = ref();
const about = ref<InstanceType<typeof About>>();
const services = ref<InstanceType<typeof Services>>();
const technology = ref<InstanceType<typeof Technology>>();
const contact = ref<InstanceType<typeof Contact>>();
let sections = [contact, technology, services, about];
let onScrollDebounce: () => void;

const onScroll = () => {
  const top = window.pageYOffset;
  const section = sections.find((section, idx) => {
    const sectionTop = section.value?.$el.offsetTop ?? 0;
    if (top > sectionTop - 350 || idx === sections.length - 1) {
      return true;
    }
  });
  if (!section) {
    activeSection.value = undefined;
  } else {
    const sid = section.value?.id;
    if (sid !== activeSection.value) {
      activeSection.value = sid;
    }
  }
};

onMounted(() => {
  onScrollDebounce = debounce(onScroll, 100);
  window.addEventListener('scroll', onScrollDebounce, { passive: true });
});
onUnmounted(() => {
  window.removeEventListener('scroll', onScrollDebounce);
});
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.section-title {
  @mixin section-title;
}

.home-wrap {
  color: $light1;
  > div {
    position: relative;
    z-index: 2;
  }
  .main {
    z-index: 1;
  }
}
.main {
  background-color: $dark1;
  min-height: 720px;
  .main-fixed {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    background-size: cover;
    background-position: 50% 10%;
    @mixin flex-center;
    .main-name {
      margin-top: 10%;
      img {
        width: 560px;
      }
    }
  }
  @media (max-width: 760px) {
    .main-fixed .main-name img {
      width: 340px;
    }
  }
}
</style>
