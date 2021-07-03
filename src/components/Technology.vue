<template>
<div id="technology" class="technology-wrap">
  <svg class="technology-top" viewBox="0 0 100 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 0 0 L 50 0 L 0 50 Z" />
    <path d="M 50 0 L 100 0 L 100 50 Z" />
  </svg>
  <div class="technology container">
    <SectionTitle :text="$t('technology.title')" :selected="selected" />
    <div class="technology-text">
      {{ $t('technology.text') }}
    </div>
    <div class="technology-subtitle">
      {{ $t('technology.build') }}
    </div>
    <div class="technology-row">
      <Python />
      <Vue />
      <Postcss />
      <Node />
      <Typescript />
      <Ethereum />
    </div>
    <div class="technology-subtitle">
      {{ $t('technology.work') }}
    </div>
    <div class="technology-row">
      <Pledgecamp />
    </div>
    <div class="technology-subtitle">
      {{ $t('technology.made') }}
    </div>
    <div class="technology-row">
      <Github
        v-for="link in links"
        :key="link.title"
        :title="link.title"
        :link="link.link"
      />
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    selected: Boolean,
  },
  setup() {
    return {
      links: [
        { title: 'vue3-eth', link: 'https://github.com/samatechtw/vue3-eth' },
        { title: 'eth-docgen', link: 'https://github.com/samatechtw/eth-docgen' },
        { title: 'postcss-basics', link: 'https://github.com/samatechtw/postcss-basics' },
      ],
    };
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.technology-wrap {
  position: relative;
  background: $dark2;
  color: $light1;
  background-image: url(/src/assets/img/stripes.svg);
  background-size: 500px;
  background-position: center 80%;
  background-repeat: no-repeat;
  .technology-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    > path {
      fill: $dark1;
    }
  }
  .technology {
    padding-top: 112px;
    padding-bottom: 80px;
  }
  .technology-text {
    @mixin light 32px;
    max-width: 780px;
    line-height: 140%;
    margin: 0 auto;
    text-align: center;
  }
  .technology-subtitle {
    @mixin light 18px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-align: center;
    margin-top: 48px;
  }
  .technology-row {
    margin: 32px auto 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
  }
  .technology-item {
    display: flex;
    align-items: center;
    margin: 16px 24px 0;
    svg {
      margin-right: 10px;
    }
    .technology-item-text {
      @mixin semibold 21px;
      color: $border1;
      transition: color 0.4s ease;
    }
  }
  @media (max-width: 900px) {
    .technology-top {
      height: 50px;
    }
  }
}

</style>
