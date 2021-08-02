<template>
<div id="contact" class="contact-wrap">
  <div class="contact container">
    <SectionTitle :text="$t('contact.title')" :selected="selected" />
    <div class="contact-content">
      <div class="contact-info">
        <div class="contact-row">
          <img :src="Location">
          <img :src="Email">
          <img :src="Name">
        </div>
        <div class="contact-row">
          <div class="info-text">
            {{ $t('contact.location') }}
          </div>
          <div class="info-text">
            {{ $t('contact.email') }}
          </div>
          <div class="info-text">
            {{ $t('contact.name') }}
          </div>
        </div>
      </div>
      <div class="contact-form">
        <STInput
          v-model="name"
          :title="$t('contact.name_title')"
          class="contact-name"
        />
        <STInput
          v-model="email"
          :title="$t('contact.email_title')"
          class="contact-email"
          inputType="email"
        />
        <STInput
          v-model="message"
          :title="$t('contact.message_title')"
          class="contact-inquiry"
          :rows="6"
        />
        <div v-if="error" class="contact-error">
          {{ error }}
        </div>
        <div v-if="success" class="contact-success">
          {{ success }}
        </div>
        <div class="contact-send" @click="send">
          <LoadingText :text="$t('contact.send')" :loading="sending" />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import useMail from '/src/utils/mail';

export default {
  props: {
    selected: Boolean,
  },
  setup() {
    const { t } = useI18n();
    const {
      name,
      email,
      message,
      error,
      success,
      sending,
      send,
    } = useMail(t);
    return {
      name,
      email,
      message,
      error,
      success,
      sending,
      send,
    };
  },
};
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

.contact-wrap {
  background: $dark1;
  color: $light1;
  .contact {
    padding-top: 72px;
    padding-bottom: 80px;
  }
  .contact-content {
    display: flex;
    flex-direction: column;
  }
  .contact-info {
    display: flex;
    justify-content: center;
    @mixin medium 16px;
    img {
      width: 32px;
      margin-right: 16px;
    }
  }
  .contact-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    > * {
      height: 56px;
      display: flex;
      align-items: center;
    }
  }
  .contact-form {
    max-width: 400px;
    width: 400px;
    margin: 16px auto 0;

  }
  .contact-send {
    width: 100%;
    @mixin flex-center;
    @mixin semibold 15px;
    margin: 24px auto 0;
    background-color: $purple;
    height: 44px;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }
  .contact-error {
    color: $red;
    @mixin medium 13px;
  }
  .contact-success {
    color: $green;
    @mixin medium 13px;
  }
  @media (max-width: 480px) {
    .contact-form {
      width: 100%;
    }
  }
}

</style>
