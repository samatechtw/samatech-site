<template>
<div class="header-links">
  <div
    v-for="link in links"
    :key="link.title"
    class="header-link"
    :class="{ active: activeSection === link.id }"
    @click="linkClick(link)"
  >
    <a
      v-if="link.link"
      :id="link.headerId"
      target="_blank"
      :href="link.link"
    >
      {{ $t(link.title) }}
    </a>
    <span
      v-else
      :id="link.headerId"
    >
      {{ $t(link.title) }}
    </span>
  </div>
  <div
    v-if="activeLink"
    class="header-underline"
    :style="{
      width: activeLink.width,
      left: activeLink.left,
    }"
  />
</div>
</template>

<script>
export default {
  emits: ['link-click'],
  props: {
    activeLink: {
      type: Object,
      default: null,
    },
    links: {
      type: Array,
      default: () => ([]),
    },
    activeSection: {
      type: String,
      default: null,
    },
  },
  setup(_props, { emit }) {
    const linkClick = (link) => {
      if(link.fn) {
        link.fn();
      }
      emit('link-click');
    };
    return {
      linkClick,
    };
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.header-links {
  margin-left: auto;
  display: flex;
  position: relative;
  a, span {
    color: $blue;
    text-decoration: none;
    transition: all 0.3s ease;
    @mixin medium 15px;
    &:hover {
      opacity: 0.7;
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
    }
  }
  .header-underline {
    position: absolute;
    bottom: -2px;
    height: 2px;
    background-color: $blue;
    transition-property: left width;
    transition-timing-function: ease-in;
    transition-duration: 0.2s;
  }
  .header-link {
    letter-spacing: 0.8px;
    cursor: pointer;
    &:not(:first-child) {
      margin-left: 24px;
    }
  }
  @media (max-width: 640px) {
    margin-left: unset;
    flex-direction: column;
    padding-top: 64px;
    align-items: center;
    .header-link {
      font-size: 28px;
      margin-top: 16px;
      &:not(:first-child) { margin-left: 0; }
    }
  }
}


</style>
