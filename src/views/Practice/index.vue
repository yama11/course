<script>
/**
 * @overview 练习场景入口组件
 */

import PracticeMonster from './PracticeMonster';
import PracticeRace from './PracticeRace';

export default {
  name: 'ViewPractice',

  components: {
    PracticeMonster,
    PracticeRace,
  },

  props: {
    asset: {
      type: Object,
      required: true,
    },
  },

  computed: {
    componentName() {
      const list = [
        PracticeMonster,
        PracticeRace,
      ];

      return list[this.asset.mode - 1];
    },
  },
};
</script>

<template>
  <AppScene
    :foreground="asset.scene.foreground"
    :background="asset.scene.background"
    class="view-practice"
  >
    <Component
      slot="foreground"
      :is="componentName"
      :src="asset.src"
    />
  </AppScene>
</template>

<style lang="postcss">
.view-practice {

}
</style>
