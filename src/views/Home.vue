<template>
<div class="home-wrap">
  <STHeader :activeSection="sectionId" />
  <About ref="about" :selected="sectionId === 'about'" />
  <Services ref="services" :selected="sectionId === 'services'" />
  <Technology ref="technology" :selected="sectionId === 'technology'" />
  <Contact ref="contact" :selected="sectionId === 'contact'" />
  <STFooter />
</div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { debounce } from '/src/utils';

export default {
  setup() {
    const activeSection = ref(null);
    const about = ref(null);
    const services = ref(null);
    const technology = ref(null);
    const contact = ref(null);
    let sections = [about, services, technology, contact];
    let onScrollDebounce = null;

    const onScroll = () => {
      const top = window.pageYOffset;
      const section = sections.find((section, idx) => {
        if(
          top > (section.value.$el.offsetTop - 350)
          || idx === sections.length - 1
        ) {
          return true;
        }
      });
      if(section !== activeSection.value) {
        activeSection.value = section.value;
      }
    };
    const sectionId = computed(() => (
      activeSection.value ? activeSection.value.$el.id : null
    ));

    onMounted(() => {
      onScrollDebounce = debounce(onScroll, 100);
      window.addEventListener('scroll', onScrollDebounce, { passive: true });
    });
    onUnmounted(() => {
      window.removeEventListener('scroll', onScrollDebounce);
    });
    return {
      activeSection,
      sectionId,
      about,
      services,
      technology,
      contact,
    };
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.section-title {
  @mixin section-title;
  > span {
    @mixin fancy-underline;
  }
}

.home-wrap {
  color: $light1;
  > div  {
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
