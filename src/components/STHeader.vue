<template>
  <Sticky>
    <div class="header" :style="{ height: `${headerHeight}px` }">
      <div class="container">
        <div class="header-left">
          <img src="@/assets/img/logo_black.png" :class="{ spin }" @click="logoClick" />
        </div>
        <HeaderLinks
          class="header-right"
          :links="headerLinks"
          :activeLink="activeLink"
          :activeSection="activeSection"
        />
        <div class="sidebar-toggle" @click="sidebarOpened = true"><em /><em /><em /></div>
        <div
          class="header-sidebar-wrap"
          :class="{ opened: sidebarOpened }"
          @click="sidebarOpened = false"
        >
          <div class="header-sidebar" @click.stop>
            <Cross
              class="sidebar-close sidebar-toggle"
              :clickable="true"
              color="black"
              @click="sidebarOpened = false"
            />
            <HeaderLinks
              class="header-links-mobile"
              :links="headerLinks"
              :activeLink="activeLink"
              :activeSection="activeSection"
              @linkClick="sidebarOpened = false"
            />
          </div>
        </div>
      </div>
    </div>
  </Sticky>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { scroll, scrollAnchor } from '@/utils/page';
import { HeaderLink, HeaderLinkFn } from './i-header-link';

const MIN_HEIGHT = 68;
const MAX_HEIGHT = 100;

const link = (id: string, fn: HeaderLinkFn): HeaderLink => ({
  id,
  headerId: `header-${id}`,
  title: `${id}.title`,
  fn: () => fn(id),
});

const props = defineProps({
  activeSection: {
    type: String,
    default: null,
  },
});

const { activeSection } = toRefs(props);
const route = useRoute();
const router = useRouter();

const homeLink = (id: string) => {
  const scrollOrGo = (id: string) => {
    if (route.name === 'Home') {
      scrollAnchor(id);
    } else {
      router.push({ name: 'Home', hash: `#${id}` });
    }
  };
  return link(id, scrollOrGo);
};
const headerLinks = [
  homeLink('services'),
  homeLink('technology'),
  homeLink('contact'),
  link('careers', () => router.push({ name: 'Careers' })),
];
const sidebarOpened = ref(false);
const headerHeight = ref(100);
const spin = ref(false);

const calculateUnderline = (link: HeaderLink): HeaderLink | undefined => {
  const el = document.getElementById(link.headerId);
  if (el) {
    const size = el.getBoundingClientRect();
    return {
      ...link,
      width: `${size.width}px`,
      left: `${el.offsetLeft}px`,
    };
  }
  return undefined;
};

const activeLink = computed(() => {
  let link = headerLinks.find((link) => link.id === activeSection.value);
  if (link) {
    link = calculateUnderline(link);
  }
  return link;
});

const onScroll = () => {
  const top = window.pageYOffset;
  // let h = Math.max(top - 200, 0);
  const h = Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, MAX_HEIGHT - (top - 200) / 5));
  if (h !== headerHeight.value) {
    headerHeight.value = h;
  }
};

const logoClick = () => {
  if (route.name !== 'Home') {
    router.push({ name: 'Home' });
  } else {
    if (!spin.value) {
      spin.value = true;
      setTimeout(() => {
        spin.value = false;
      }, 1200);
    }
    scroll(0);
  }
};

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
});
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.header {
  @mixin title 18px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  color: $light1;
  background-color: $dark1;
  position: fixed;
  width: 100%;
  top: 0;
  .container {
    @mixin flex-center;
    height: 100%;
    position: relative;
  }
  .header-sidebar-wrap {
    width: 100%;
    height: 100%;
    position: fixed;
    transition: 0.3s ease;
    display: none;
    z-index: 1010;
    right: -100%;
    top: 0;
    margin: 0;

    &.opened {
      transform: translateX(-100%);
    }
  }
  .header-sidebar {
    position: absolute;
    right: 0;
    width: 300px;
    height: 100%;
    background-color: $dark1;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
  }
  .sidebar-toggle {
    cursor: pointer;
    display: none;
    margin-left: auto;
    margin-right: 16px;

    em {
      display: block;
      width: 19px;
      height: 2px;
      background: $light1;
      margin-top: 5px;
      transition: all 0.3s;

      &:first-child {
        margin-top: 0;
      }
    }
  }
  .sidebar-close {
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 99;
  }
  .header-left {
    @mixin flex-center;
    height: 100%;
    img {
      cursor: pointer;
      height: 60%;
    }
    .spin {
      animation: rotateY 1s 1 ease;
    }
  }
  @media (max-width: 640px) {
    .header-sidebar-wrap,
    .sidebar-toggle {
      display: block;
    }
    .header-right {
      display: none;
    }
  }
}
@keyframes rotateY {
  to {
    transform: rotateY(360deg);
  }
}
</style>
