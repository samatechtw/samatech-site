<template>
  <div class="st-input-wrap">
    <component
      :is="rows ? 'textarea' : 'input'"
      v-bind="commonProps"
      :rows="rows"
      :autocomplete="autocomplete"
      :value.prop="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      @keyup.enter="emit('handle-enter')"
    />
    <label
      v-if="title"
      class="st-input-title"
      :for="`input${uid}`"
      :class="{ active: placeholder || modelValue || modelValue === 0 }"
    >
      {{ title }}
    </label>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import { uidSingleton } from '@/utils/uid';

const emit = defineEmits(['update:modelValue', 'handle-enter']);

const props = defineProps({
  modelValue: {
    type: [Number, String],
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  inputType: {
    type: String,
    default: 'text',
  },
  rows: {
    type: Number,
    default: null,
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  inputClass: {
    type: String,
    default: null,
  },
  maxLength: {
    type: Number,
    default: undefined,
  },
});

const uid = uidSingleton.next();

const { inputClass, rows, placeholder, inputType, maxLength } = toRefs(props);

const commonProps = computed(() => {
  const props: Record<string, unknown> = {
    class: {
      'st-input': true,
      'st-textarea': !!rows.value,
      [inputClass.value]: inputClass.value,
    },
    maxlength: maxLength?.value,
    // eslint-disable-next-line
    name: `input${uid}`,
    placeholder: placeholder.value,
  };
  if (!rows) {
    props.type = inputType.value;
  }
  return props;
});
</script>

<style lang="postcss">
@import '/src/assets/css/global.css';

$bg: $dark1;

.st-input-wrap {
  margin-bottom: 15px;
  margin-top: 24px;
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  > input {
    box-sizing: border-box;
    padding-top: 3px;
  }
  > textarea {
    box-sizing: border-box;
    padding-top: 16px;
  }

  label {
    @mixin medium 15px;
    color: $light2;
    letter-spacing: 0;
    position: absolute;
    background-color: transparent;
    margin-left: 12px;
    top: 18px;
    padding: 0 8px 2px 9px;
    pointer-events: none;
    transition: 0.2s ease all;
  }
  label.active,
  .st-input:focus ~ label {
    top: -10px;
    font-size: 13px;
    background-color: $bg;
    border-radius: 5px;
  }

  .st-input {
    @mixin medium 15px;
    color: $light2;
    background: $bg;
    width: 100%;
    height: 56px;
    outline: none;
    outline-style: none;
    box-shadow: none;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    padding-left: 24px;
    padding-right: 16px;

    &.st-textarea {
      height: unset;
    }

    &:focus::-webkit-input-placeholder {
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    /* stylelint-disable */
    &:-internal-autofill-selected,
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      /* Disable background color of input autocomplete */
      box-shadow: 0 0 0 100px #fff inset !important;
      font-size: initial !important;
    }
    /* stylelint-enable */

    &[type='number'] {
      -moz-appearance: textfield;
    }
    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::placeholder {
      color: #adadad;
    }
  }
}
</style>
