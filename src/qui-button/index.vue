<template>
  <van-button v-bind="{...$attrs, ...$props}" >
    <slot />
  </van-button>
</template>

<script>
export default {
  name: 'QuiButton'
};
</script>
