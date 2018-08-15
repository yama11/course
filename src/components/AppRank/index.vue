<script>
/**
 * @overview 排名展示
 *
 * @author huojinzhao
 */

import RankItem from './RankItem';

export default {
  name: 'AppRank',

  components: {
    RankItem,
  },

  props: {
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
    style() {
      return {
        'background-image': `url(${this.panel})`,
      };
    },
  },
};
</script>

<template>
  <div
    :style="style"
    class="global-ground app-rank"
  >
    <RankItem
      v-for="student in list"
      :key="student.id"
      :groove="groove"
      :data="student"
    />
  </div>
</template>

<style lang="postcss">
.app-rank {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  padding: 123px 550px 0 100px;
}
</style>
