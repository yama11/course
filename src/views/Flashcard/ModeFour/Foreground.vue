<script>
/**
 * @overview 闪卡场景四 - 前景
 *
 * @author suyanping
 */

import { equipmentInform } from '@/utils';
import ForegroundCard from '../components/ForegroundCard';
import IntervalTime from '../components/IntervalTime';
import ToolTitle from '../components/ToolTitle';

export default {
  name: 'FlashcardForegroundModeFour',

  components: {
    ForegroundCard,
    IntervalTime,
    ToolTitle,
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

    isStart: false,

    title: 'Look at the one below.',

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


    animations() {
      return this.$animate.settle();
    },

    animationsRandom() {
      return this.$animate.random();
    },
  },

  created() {
    window.addEventListener(
      'equipmentCallback',
      this.equipmentCallback,
    );

    this.$audio.play();
  },

  beforeDestroy() {
    window.removeEventListener(
      'equipmentCallback',
      this.equipmentCallback,
    );
  },

  methods: {
    directorBroadcast() {
      if (this.currIndex === 0) {
        this.isStart = true;

        this.director.disabled = true;

        this.title = 'Choose the right answer.';
      }

      if (this.currIndex <= 1) {
        this.equipmentInform(Number(!this.currIndex));

        this.isTopic = true;

        this.backgroundShow();
      }

      if (this.currIndex === 1) {
        this.backgroundInform();

        this.title = 'Check the right answer.';
      }

      if (this.currIndex >= 1) {
        this.isShowRank = true;

        this.director.disabled = true;
      }

      this.currIndex = this.currIndex + 1;
    },

    changeControl() {
      this.director.disabled = false;
    },

    getLabel(index) {
      return ['A', 'B', 'C', 'D'][index];
    },

    equipmentInform(tag) {
      const type = 'flashcard';

      const data = { answer: this.src.answer.select };

      const payload = { tag, type, name: this.moduleName, data };

      equipmentInform(payload);
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
    ">

    <IntervalTime
      v-show="isStart"
      :times="10"
      :is-start="isStart"
      @finishInterval="changeControl"/>

    <ToolTitle
      :title="title"/>

    <img
      v-if="!isTopic"
      :src="src.topic"
      :class="[animationsRandom[1], 'card-foreground-modefour__topic']"
    >

    <div
      v-if="isTopic">
      <ForegroundCard
        v-for="(item, index) in optionImg"
        :key="item.url"
        :active="checkCardActive(getLabel(index))"
        :label="getLabel(index)"
        :amount="amounts[getLabel(index)]"
        :class="animations[index]"
      />
    </div>

    <!-- <AppRank
      v-if="isShowRank"
      :list="studentRank"
      :groove="$store.theme.rank.groove"
      :panel="$store.theme.rank.panel"
    /> -->

    <AppDirector
      :disabled="director.disabled"
      @control="directorBroadcast"
    />
  </div>
</template>

<style lang="postcss">
.card-foreground-modefour__topic {
  align-self: center;
  border: 5px solid #f28d20;
}
</style>
