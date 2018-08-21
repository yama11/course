<script>
/**
 * @overview 倒计时
 *
 * @author suyanping
 */

export default {
  name: 'IntervalTime',

  props: {
    times: {
      type: Number,
      default: null,
    },

    isStart: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      seconds: this.times,

      intervalStr: '',
    };
  },

  watch: {
    isStart(val) {
      if (val) {
        this.initInterval();
      }
    },
  },

  beforeDestroy() {
    clearInterval(this.intervalStr);
  },

  methods: {
    initInterval() {
      this.intervalStr = setInterval(() => {
        if (this.seconds > 0) {
          this.seconds = this.seconds - 1;

          return;
        }

        clearInterval(this.intervalStr);

        this.$emit('finishInterval');
      }, 1000);
    },
  },

};
</script>

<template>
  <div
    v-if="seconds > 0"
    class="interval-time">
    {{ seconds }} S
  </div>
</template>

<style lang="postcss">
.interval-time{
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: rgba(0,0,0,0.3);
  color: white;
  line-height: 250px;
  text-align: center;
  position: absolute;
  left: 800px;
  top: 360px;
  font-size: 80px;
}
</style>
