<script>
/**
 * @overview 排名展示 模式1
 *
 * @author huojinzhao
 */

import RankItem from './components/RankItem';

export default {
  name: 'AppRankModeOne',

  components: {
    RankItem,
  },

  props: {
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
};
</script>

<template>
  <div class="global-ground app-rank--mode1">
    <RankItem
      v-for="student in list"
      :key="student.id"
      :groove="groove"
      :data="student"
      :mode="mode"
    />
  </div>
</template>

<style lang="postcss">
.app-rank--mode1 {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  padding: 123px 550px 0 100px;
}
</style>
