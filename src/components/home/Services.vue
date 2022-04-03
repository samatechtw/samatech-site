<template>
  <div id="services" class="services-wrap">
    <div class="services container">
      <SectionTitle :text="$t('services.title')" :selected="selected" />
      <div class="services-items">
        <ServiceItem :copy="$tm('services.web')" :image="Web" imageWidth="54px" />
        <ServiceItem
          :copy="$tm('services.blockchain')"
          :image="Blockchain"
          imageWidth="64px"
        />
        <ServiceItem
          :copy="$tm('services.firmware')"
          :image="Firmware"
          imageWidth="64px"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Blockchain from '@/assets/img/blockchain.svg';
import Firmware from '@/assets/img/firmware.svg';
import Web from '@/assets/img/web.svg';

defineProps({
  selected: Boolean,
});
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.services-wrap {
  background-color: $dark1;
  .services {
    padding-top: 100px;
    padding-bottom: 96px;
  }
  .services-items {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 1060px) {
    .services-items {
      flex-direction: column;
    }
  }
  @media (max-width: 600px) {
    .services {
      padding-top: 80px;
      padding-bottom: 72px;
    }
    .services-items {
      margin-top: 0;
    }
  }
}
</style>
