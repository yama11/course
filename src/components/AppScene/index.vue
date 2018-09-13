<script>
/**
 * @overview 前后景容器
 *
 * @author huojinzhao
 */

import AppGround from '../AppGround';

export default {
  name: 'AppScene',

  components: {
    AppGround,
  },

  props: {
    // 后景底图
    background: {
      type: String,
      default: '',
    },

    // 前景底图
    foreground: {
      type: String,
      default: '',
    },
  },

  computed: {
    scene() {
      const { theme, state } = this.$store;

      const scene = theme.scene[state.section];

      return {
        background: this.background || scene.background,
        foreground: this.foreground || scene.foreground,
      };
    },
  },
};
</script>

<template>
  <div class="global-scene app-scene">
    <AppGround
      v-if="$store.appInfo.scene !== 'foreground'"
      :scene="scene.background"
      class="scene-backgroud"
    >
      <slot name="background" />
    </AppGround>

    <AppGround
      v-if="$store.appInfo.scene !== 'background'"
      :scene="scene.foreground"
      class="scene-foregroud"
    >
      <slot name="foreground" />
    </AppGround>
  </div>
</template>

<style lang="postcss">
.app-scene {

}
</style>
