<script>
/**
 * @overview cocos动画模式一 - 前景
 *
 * @author yehaifeng
 */

export default {
  name: 'CocosForegroundModeOne',

  props: {
    src: {
      type: Object,
      default: () => {},
    },
  },

  data: () => ({
    director: {
      disabled: true,
    },
  }),
};
</script>

<template>
  <div class="cocos-foreground">
    <iframe
      v-if="src.foreground"
      :src="src.foreground"
      class="cocos-animation"
    />

    <AppDirector :disabled = "director.disabled" />
  </div>
</template>

<style lang="postcss">
.cocos-foreground,
.cocos-animation {
  width: 100%;
  height: 100%;
}
</style>
