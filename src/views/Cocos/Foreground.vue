<script>
/**
 * @overview cocos动画 - 前景
 *
 * @author yehaifeng
 */

export default {
  name: 'CocosForeground',

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
  <div
    slot="cocos-foreground"
    class="cocos-foreground">
    <iframe
      v-if="src.foreground"
      :src="src.foreground"
      class="cocos-animation"/>
    <AppDirector :disabled = "director.disabled" />
  </div>
</template>

<style lang="postcss">
.cocos-foreground {
  width: 100%;
  height: 100%;
}
</style>
