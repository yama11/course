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
    this.$audio.play();
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
