<script>
/**
 * @overview cocos动画模式二 -  - 前景
 *
 * @author suyanping
 */

export default {
  name: 'CocosForegroundModetwo',

  props: {
    src: {
      type: Object,
      default: () => {},
    },
  },

  data: () => ({
    director: {
      disabled: false,
    },
  }),

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

      setTimeout(() => {
        window.focus();
      }, 100);
    },
  },
};
</script>

<template>
  <div class="cocos-foreground">
    <iframe
      v-if="src.foreground"
      ref="iframe"
      :src="src.foreground"
      frameborder="0"
      class="cocos-animation"
    />

    <AppDirector
      :disabled="director.disabled"/>
  </div>
</template>

<style lang="postcss">
.cocos-foreground,
.cocos-animation {
  width: 100%;
  height: 100%;
}
</style>
