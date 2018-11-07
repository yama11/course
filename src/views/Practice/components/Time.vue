<script>
/**
 * @overview 倒计时
 *
 * @author suyanping
 */

export default {
  name: 'PracticeTime',

  props: {
    // 倒计时主题
    timeTheme: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    timeIndex: 0,

    videoSrc: './audio/10085.mp3',
  }),

  created() {
    this.startDownTime();
  },

  methods: {
    startDownTime() {
      const timeLength = this.timeTheme.length - 1;

      if (this.timeIndex >= timeLength) {
        this.$emit('timeEnd');

        return;
      }

      this.timeIndex += 1;

      this.$audio.play(this.videoSrc);

      setTimeout(this.startDownTime, 2000);
    },
  },
};
</script>

<template>
  <img
    v-show="timeTheme[timeIndex]"
    :src="timeTheme[timeIndex]"
    class="practice-time"
  >
</template>

<style lang="postcss">
.practice-time {
  width: 239px;
  height: 250px;
  position: absolute;
  left: 800px;
  top: 460px;
}
</style>
