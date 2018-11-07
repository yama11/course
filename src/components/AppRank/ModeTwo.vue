<script>
/**
 * @overview 排名展示 模式2
 *
 * @author huojinzhao
 */

import RankItem from './components/RankItem';

export default {
  name: 'AppRankModeTwo',

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

  computed: {
    theme() {
      return this.$store.theme;
    },

    leaders() {
      return this.list.slice(0, 3);
    },

    fronts() {
      const space = {
        id: null,
        name: '占位',
        score: 0,
      };

      return [
        space,
        ...this.list.slice(3, 6),
        space,
      ];
    },

    rests() {
      return this.list.slice(6);
    },
  },

  methods: {
    fillAvatar(url) {
      return url || this.theme.student.avatar;
    },
  },
};
</script>

<template>
  <div class="global-ground app-rank--mode2">
    <div class="app-rank__leaders--mode2">
      <RankItem
        v-for="student in leaders"
        :key="student.id"
        :data="student"
        :mode="2"
      />
    </div>
    <RankItem
      v-for="student in [...fronts, ...rests]"
      :style="{
        visibility: student.id === null ? 'hidden' : 'visible'
      }"
      :key="student.id"
      :groove="groove"
      :data="student"
      :mode="2"
    />
  </div>
</template>

<style lang="postcss">
.app-rank--mode2 {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  padding: 523px 0 0 150px;
}

div.app-rank__leaders--mode2 {
  position: absolute;
  top: 0;
  left: 0;
  height: 490px;
  width: 100%;

  .app-rank-item {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    width: 150px;
    height: 100%;
  }

  .app-rank-item:first-child {
    padding-top: 85px;
    left: 855px;
  }

  .app-rank-item:nth-child(2) {
    padding-top: 138px;
    left: 671px;
  }

  .app-rank-item:nth-child(3) {
    padding-top: 180px;
    left: 1040px;
  }

  .app-rank-item__avatar {
    margin: 0;
  }

  .app-rank-item__info {
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .app-rank-item__name {
    color: #FFE269;
  }

  .app-rank-item__score {
    color: white;
  }
}
</style>
