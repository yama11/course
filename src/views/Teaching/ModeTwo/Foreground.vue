<script>
/**
 * @overview 教学场景 - 多图多文
 *
 * @author huojinzhao
 */

export default {
  name: 'LearnForegroundModeOne',

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
};
</script>

<template>
  <div class="teaching-foreground global-scene">
    <AppDirector :disabled="director.disabled" />
  </div>
</template>

<style lang="postcss" scoped>
.teaching-foreground {

}
</style>
