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

  methods: {
    directorBroadcast() {
      if (this.$refs.iframe) {
        this.$refs.iframe.contentWindow
          .postMessage({ type: 'play' }, '*');
      }

      if (this.src.background) {
        this.touchBack();
      }
    },

    touchBack() {
      const eventType = 'directorBroadcast';

      this.$store.syncTeachGroupState({}, eventType);
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
      :disabled="director.disabled"
      @control="directorBroadcast"/>
  </div>
</template>

<style lang="postcss">
.cocos-foreground,
.cocos-animation {
  width: 100%;
  height: 100%;
}
</style>
