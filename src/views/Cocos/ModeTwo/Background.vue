<script>
/**
 * @overview cocos动画模式二 - 后景
 *
 * @author suyanping
 */

export default {
  name: 'CocosBackgroundModeTwo',

  props: {
    src: {
      type: Object,
      default: () => {},
    },
  },

  created() {
    this.$ws.on('directorControl', this.directorControlCallback);
  },

  destroyed() {
    this.$ws.off('directorControl', this.directorControlCallback);
  },

  methods: {
    directorControlCallback() {
      if (this.$refs.iframe) {
        this.$refs.iframe.contentWindow
          .postMessage({ type: 'play' }, '*');
      }
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
      ref="iframe"
      :src="src.background"
      frameborder="0"
      class="cocos-animation"/>

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
