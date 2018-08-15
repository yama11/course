<script>
/**
 * @overview 闪卡场景
 *
 * @author huojinzhao
 */

import ModeOne from './ModeOne';
import ModeTwo from './ModeTwo';

export default {
  name: 'ViewFlashcard',

  components: {
    ...ModeOne,
    ...ModeTwo,
  },

  props: {
    asset: {
      type: Object,
      required: true,
    },
  },

  computed: {
    componentName() {
      const list = ['One', 'Two', 'Three', 'Four'];

      const postfix = list[this.asset.mode - 1];

      return {
        background: `BackgroundMode${postfix}`,
        foreground: `ForegroundMode${postfix}`,
      };
    },

    theme() {
      return this.$store.theme.card;
    },
  },
};
</script>

<template>
  <AppScene
    :foreground="theme.foreground"
    :background="theme.background"
    class="view-flashcard"
  >
    <Component
      slot="background"
      :is="componentName.background"
      :src="asset.src"
    />

    <Component
      slot="foreground"
      :is="componentName.foreground"
      :src="asset.src"
    />
  </AppScene>
</template>

<style lang="postcss">
.view-flashcard {

}
</style>
