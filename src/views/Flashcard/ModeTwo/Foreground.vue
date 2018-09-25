<script>
/**
 * @overview 闪卡场景二 - 前景
 *
 * @author suyanping
 */

import { equipmentInform } from '@/utils';
import ForegroundCard from '../components/ForegroundCard';
import ToolTitle from '../components/ToolTitle';

export default {
  name: 'FlashcardForegroundModeTwo',

  components: {
    ForegroundCard,
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

    selectList: ['A', 'B', 'C', 'D'],

    isShow: false,

    isShowRank: false,

    title: 'Look carefully!',

    // 控制器执行步进
    currIndex: 0,
  }),

  computed: {
    optionImg() {
      const selectIndex = this.selectList
        .findIndex(item => item === this.src.answer.select);

      const insertUrl = this.src.answer.url;

      const newOptions = [...this.src.options];

      newOptions.splice(selectIndex, 0, insertUrl);

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

    this.$audio.play();
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
      if (this.currIndex === 0) {
        this.director.disabled = true;

        this.showTopic();
      }

      this.currIndex <= 1 && this.equipmentInform(Number(!this.currIndex));

      this.currIndex === 1 && this.backgroundInform();

      if (this.currIndex >= 1) {
        this.isShowRank = true;

        this.director.disabled = true;
      }

      this.currIndex = this.currIndex + 1;
    },

    showTopic() {
      const eventType = 'directorBroadcast';

      const data = {
        showTopic: true,
      };

      this.$store.syncTeachGroupState(data, eventType);
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

    backgroundInform() {
      this.title = 'Check the right answer.';

      const eventType = 'directorBroadcast';

      const data = {
        isActive: false,
      };

      this.$store.syncTeachGroupState(data, eventType);
    },

    controlDirectorState({ data }) {
      if (data.title) {
        this.title = 'Choose the right answer.';

        this.isShow = true;

        return;
      }

      if (data.fianlTitle) {
        this.director.disabled = false;
      }
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

    <ToolTitle
      :title="title"/>

    <div
      v-if="isShow">
      <ForegroundCard
        v-for="(item, index) in optionImg"
        :key="item"
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
.card-foreground__jump{
  align-items: flex-start;
  left: 100px;
  top: 200px;
  position: relative;
}

.card-foreground__jump > div{
  position: absolute;
}

.intervalCard > img{
  width: 100%;
  height: 100%;
  position: absolute;
  background: white content-box;
  padding: 20px;
  border-radius: 5px;
}
</style>
