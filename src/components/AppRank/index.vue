<script>
/**
 * @overview 排名展示派生容器
 *
 * @author huojinzhao
 */

import ModeOne from './ModeOne';
import ModeTwo from './ModeTwo';

export default {
  name: 'AppRank',

  components: {
    ModeOne,
    ModeTwo,
  },

  props: {
    // 排名模式
    mode: {
      type: Number,
      default: 1,
    },

    // 排名展示板
    panel: {
      type: String,
      default: '',
    },

    // 学生项展示背景
    groove: {
      type: String,
      default: '',
    },

    list: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    componentName() {
      const list = [
        'ModeOne',
        'ModeTwo',
      ];

      return list[this.mode - 1];
    },

    style() {
      return {
        'background-image': `url(${this.panel})`,
      };
    },
  },
};
</script>

<template>
  <component
    :style="style"
    :is="componentName"
    :list="list"
    :groove="groove"
  />
</template>

<style lang="postcss">
.app-rank {

}
</style>
