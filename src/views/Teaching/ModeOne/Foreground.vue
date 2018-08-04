<script>
/**
 * @overview 教学场景 - 一图多文
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
  <div class="teachingforeground global-scene">
    <AppDirector :disabled="director.disabled" />
  </div>
</template>

<style lang="postcss">
.teachingforeground {

}
</style>
