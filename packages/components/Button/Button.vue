<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps } from "./types";
defineOptions({
  name: "ErButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: "button",
  tag: "button",
});

const slots = defineSlots();
const _ref = ref<HTMLButtonElement>();
</script>

<template>
  <component
    :is="props.tag"
    ref="_ref"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    class="er-button"
    :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain':plain,
      'is-circle':circle,
      'is-round':round,
      'is-disabled':disabled,
      'is-loading':loading
    }"
  >
  <slot></slot>
  </component>
</template>
