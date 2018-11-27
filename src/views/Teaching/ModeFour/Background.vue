<script>
/**
 * @overview 教学场景四 - 多图多文后景
 *
 * @author yehaifeng
 */

export default {
  name: 'LearnBackgroundModeFour',

  props: {

  },

  created() {
    setTimeout(() => {
      this.$audio.play();
    }, 200);
  },
};
</script>

<template>
  <div class="teaching-background global-scene"/>
</template>

<style lang="postcss" scoped>
.teaching-background {

}
</style>
