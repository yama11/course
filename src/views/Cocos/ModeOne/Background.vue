<script>
/**
 * @overview cocos动画模式一 - 后景
 *
 * @author yehaifeng
 */

export default {
  name: 'CocosBackgroundModeOne',

  props: {
    src: {
      type: Object,
      default: () => {},
    },
  },

};
</script>

<template>
  <div
    class="cocos-background"
  >

    <iframe
      v-if="src.background"
      :src="src.background"
      class="cocos-animation"
      frameborder="0"/>

  </div>
</template>

<style lang="postcss">
.cocos-background {
  width: 100%;
  height: 100%;
}
.cocos-animation{
  width: 100%;
  height: 100%;
}
</style>
