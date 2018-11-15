<script>
/**
 * @overview  教学场景四 - 多图多文前景
 *
 * @author yehaifeng
 */

export default {
  name: 'LearnForegroundModeFour',

  props: {
    src: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    director: {
      disabled: true,
    },
  }),

  computed: {
    animations() {
      return this.$animate.settle();
    },
  },

  created() {
    this.$audio.play();
  },
};
</script>

<template>
  <div
    class="
      global-scene
      teaching-foreground
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
    <AppDirector :disabled="director.disabled" />
  </div>
</template>

<style lang="postcss" scoped>
.teaching-foreground {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
</style>
