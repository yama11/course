<script>
/**
 * @overview 练习加载提示组件
 *
 * @author huojinzhao
 */

export default {
  name: 'PracticeLoading',

  props: {
    scene: {
      type: String,
      default: '',
    },

    bar: {
      type: String,
      default: '',
    },

    time: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    cssRoot() {
      return {
        'background-image': `url(${this.scene})`,
      };
    },

    cssProgress() {
      return {
        'background-image': `url(${this.bar})`,
        'animation-duration': `${this.time}s`,
      };
    },
  },
};
</script>

<template>
  <div
    :style="cssRoot"
    class="
      global-ground
      global-backdrop
      practice-loading
    "
  >
    <div
      :style="cssProgress"
      class="
        global-backdrop
        practice-loading__progress
      "
      @animationend="$emit('end')"
    />
  </div>
</template>

<style lang="postcss">
.practice-loading {
  position: fixed;
  z-index: 100;
}

.practice-loading__progress {
  position: absolute;
  left: 586px;
  bottom: 80px;
  border-radius: 18px;
  height: 36px;
  width: 824px;
  animation-name: practiceLoadingProgress;
  animation-timing-function: ease-in-out;
}

@keyframes practiceLoadingProgress {
  from {
    background-position: -824px;
  }
}
</style>
