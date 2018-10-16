<script>
/**
 * @overview 倒计时
 *
 * @author suyanping
 */

export default {
  name: 'PracticeTime',

  props: {
    timeTheme: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    timeIndex: 0,

    timeOut: '',
  }),

  beforeDestroy() {
    clearInterval(this.timeOut);
  },

  created() {
    this.startDownTime();
  },

  methods: {
    startDownTime() {
      this.timeOut = setInterval(() => {
        const timeLength = this.timeTheme.length;

        if (this.timeIndex < timeLength) {
          this.timeIndex += 1;

          return;
        }

        clearInterval(this.timeOut);

        this.$emit('timeEnd');
      }, 1000);
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
