<script>
/**
 * @overview 场景容器
 *
 * @author huojinzhao
 */

export default {
  name: 'AppGround',

  props: {
    // 场景背景图
    scene: {
      type: String,
      default: '',
    },
  },

  computed: {
    style() {
      return {
        'background-image': `url(${this.scene})`,
      };
    },
  },
};
</script>

<template>
  <div
    :style="style"
    class="
      global-screen
      global-backdrop
      app-ground
    "
  >
    <slot />
  </div>
</template>

<style lang="postcss">
.app-ground {
  position: absolute;
  top: 0;
  left: 0,
}
</style>
