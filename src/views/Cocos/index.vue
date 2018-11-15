<script>
/**
 * @overview cocos动画
 *
 * @author yehaifeng
 */
import ModeOne from './ModeOne';
import ModeTwo from './ModeTwo';

export default {
  name: 'ViewCocos',

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

      const mode = this.asset.mode ? this.asset.mode : 1;

      const postfix = list[mode - 1];

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
    class="view-cocos"
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
.view-cocos {

}
</style>
