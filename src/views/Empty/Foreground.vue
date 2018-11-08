<script>
/**
 * @overview 空白页 - 前景
 *
 * @author suyanping
 */

export default {
  name: 'EmptyForeground',

  data: () => ({
    director: {
      disabled: true,
    },
  }),
};
</script>

<template>
  <div class="boot-foreground">
    <AppDirector :disabled="director.disabled" />
  </div>

</template>

<style lang="postcss">

</style>
