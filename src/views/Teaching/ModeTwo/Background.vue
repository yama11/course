<script>
/**
 * @overview 音乐场景 - 后景
 *
 * @author huojinzhao
 */

export default {
  name: 'LearnBackgroundModeTwo',

  props: {
    src: {
      type: Object,
      required: true,
    },
  },

  computed: {
    animations() {
      return this.$animate.settle();
    },
  },

  mounted() {
    this.$audio.play();
  },
};
</script>

<template>
  <div
    class="
      global-scene
      teaching-background
    "
  >
    <AppBackgroundCard
      v-for="(item, index) in src.cards"
      :class="animations[index]"
      :key="item.url"
      :card="item.url"
      :text="item.text"
      :is-transparent="true"
    />
  </div>
</template>

<style lang="postcss" scoped>
.teaching-background {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
</style>
