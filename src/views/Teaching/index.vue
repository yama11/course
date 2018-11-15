<script>
/**
 * @overview 教学场景
 *
 * @author huojinzhao
 */

import ModeOne from './ModeOne';
import ModeTwo from './ModeTwo';
import ModeThree from './ModeThree';
import ModeFour from './ModeFour';

export default {
  name: 'ViewTeaching',

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
    class="view-teaching"
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
.view-teaching {

}
</style>
