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
  <div class="practice-time">
    <div
      v-for="(item,index) in timeTheme"
      v-if="index === timeIndex"
      :key="index"
      class="practice-time__block">
      <img :src="item">
    </div>
  </div>
</template>

<style lang="postcss">
.practice-time {
  width: 239px;
  height: 250px;
  position: relative;
  left: 800px;
  top: 460px;
}

.practice-time__block{
  position: absolute;
  left: 0;
  top: 0;
}

.practice-time__block img{
  width: 100%;
  height: 100%;
}
</style>
