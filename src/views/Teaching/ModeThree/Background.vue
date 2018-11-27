<script>
/**
 * @overview 音乐场景 - 后景
 *
 * @author suyanping
 */

export default {
  name: 'LearnBackgroundModeThree',

  data: () => ({

  }),

  created() {
    setTimeout(() => {
      this.$audio.play();
    }, 200);
  },
};
</script>

<template>
  <div class="global-scene teaching-background"/>
</template>

<style lang="postcss" scoped>
.teaching-background {

}
</style>
