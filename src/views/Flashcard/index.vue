<script>
/**
 * @overview 闪卡场景
 *
 * @author huojinzhao
 */

import ModeOne from './ModeOne';
import ModeTwo from './ModeTwo';
import ModeThree from './ModeThree';
import ModeFour from './ModeFour';

export default {
  name: 'ViewFlashcard',

  components: {
    ...ModeOne,
    ...ModeTwo,
    ...ModeThree,
    ...ModeFour,
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
  },
};
</script>

<template>
  <AppScene
    :foreground="asset.scene.foreground"
    :background="asset.scene.background"
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
