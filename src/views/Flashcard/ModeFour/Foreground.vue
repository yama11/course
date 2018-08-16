<script>
/**
 * @overview 闪卡场景四 - 前景
 *
 * @author suyanping
 */

import { equipmentInform } from '@/utils';
import ForegroundCard from '../components/ForegroundCard';

export default {
  name: 'FlashcardForegroundModeFour',

  components: {
    ForegroundCard,
  },

  props: {
    src: {
      type: Object,
      default: () => {},
    },
  },

  data: () => ({
    director: {
      disabled: false,
    },

    amounts: {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
    },

    isTopic: false,

    selectList: ['A', 'B', 'C', 'D'],

    isShowRank: false,

    // 控制器执行步进
    currIndex: 0,
  }),

  computed: {
    optionImg() {
      const selectIndex = this.selectList
        .findIndex(item => item === this.src.answer.select);

      const insertObj = {
        url: this.src.answer.url,
        text: this.src.answer.text,
      };

      const newOptions = [...this.src.options];

      newOptions.splice(selectIndex, 0, insertObj);

      return newOptions;
    },

    ranking() {
      const rankList = Object.keys(this.amounts)
        .map(key => ({ label: key, amount: this.amounts[key] }));

      return rankList.sort((a, b) => b.amount - a.amount);
    },

    moduleName() {
      const { step, section } = this.$store.state;

      return `flashcard-${section}-${step}`;
    },

    studentRank() {
      if (this.moduleName !== this.$store.score.game_name) {
        return [];
      }

      return this.$store.score.game_score_rank;
    },
  },

  created() {
    this.$ws.on(
      'directorCallback',
      this.controlDirectorState,
    );

    window.addEventListener(
      'equipmentCallback',
      this.equipmentCallback,
    );
  },

  beforeDestroy() {
    this.$ws.off(
      'directorCallback',
      this.controlDirectorState,
    );

    window.removeEventListener(
      'equipmentCallback',
      this.equipmentCallback,
    );
  },

  methods: {
    directorBroadcast() {
      if (this.currIndex <= 1) {
        this.equipmentInform(Number(!this.currIndex));

        this.isTopic = true;

        this.backgroundShow();
      }

      this.currIndex === 1 && this.backgroundInform();

      if (this.currIndex >= 2) {
        this.isShowRank = true;

        this.director.disabled = true;
      }

      this.currIndex = this.currIndex + 1;
    },

    getLabel(index) {
      return ['A', 'B', 'C', 'D'][index];
    },

    equipmentInform(tag) {
      const type = 'flashcard';

      const data = { tag, type, name: this.moduleName };

      equipmentInform(data);
    },

    backgroundShow() {
      const eventType = 'directorBroadcast';

      const data = {
        isActive: this.isTopic,
      };

      this.$store.syncTeachGroupState(data, eventType);
    },

    backgroundInform() {
      const eventType = 'directorBroadcast';

      const data = {
        isActive: false,
      };

      this.$store.syncTeachGroupState(data, eventType);
    },

    equipmentCallback({ detail: { name, data } }) {
      if (name === this.moduleName) {
        this.amounts = data;
      }
    },

    checkCardActive(label) {
      const index = this.ranking
        .findIndex(item => item.label === label);

      return this.currIndex > 0 && index === 0;
    },
  },

};
</script>

<template>

  <div
    class="
      card-foreground
      global-card-container
      global-scene
      card-foreground__topic
    ">

    <img
      v-if="!isTopic"
      :src="src.topic">

    <div
      v-if="isTopic && !isShowRank">
      <ForegroundCard
        v-for="(item, index) in optionImg"
        :key="item.url"
        :active="checkCardActive(getLabel(index))"
        :label="getLabel(index)"
        :amount="amounts[getLabel(index)]"
      />
    </div>

    <AppRank
      v-if="isShowRank"
      :list="studentRank"
      :groove="$store.theme.rank.groove"
      :panel="$store.theme.rank.panel"
    />

    <AppDirector
      :disabled="director.disabled"
      @control="directorBroadcast"
    />
  </div>
</template>

<style lang="postcss">
.card-foreground__topic{
  align-items: flex-start;
}
</style>
