<script>
/**
 * @overview 闪卡场景三 - 前景
 *
 * @author suyanping
 */

import { equipmentInform } from '@/utils';
import ForegroundCard from '../components/ForegroundCard';
import IntervalTime from '../components/IntervalTime';
import ToolTitle from '../components/ToolTitle';

export default {
  name: 'FlashcardForegroundModeThree',

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

    title: 'Listen carefully!',

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
      this.audioPlay(false);

      if (this.currIndex === 0) {
        this.audioPlay(true);

        this.title = 'Choose the right answer.';

        this.isStart = true;

        this.director.disabled = true;
      }

      if (this.currIndex <= 1) {
        this.equipmentInform(Number(!this.currIndex));

        this.isTopic = true;

        this.backgroundShow();
      }

      if (this.currIndex === 1) {
        this.title = 'Check the right answer.';

        this.backgroundInform();
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

    audioPlay(isPlaying) {
      const eventType = 'directorAudio';

      const data = {
        isPlaying,
      };

      this.$store.syncTeachGroupState(data, eventType);
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

    <div
      v-show="!isStart"
      :class="[animationsRandom[1], 'card-foreground__audioImg']">
      Ready Go
    </div>

    <IntervalTime
      v-show="isStart"
      :times="10"
      :is-start="isStart"
      @finishInterval="changeControl"/>

    <ToolTitle
      :title="title"/>

    <AppAudio :src="src.topic.audio"/>

    <div v-if="isTopic">
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
.card-foreground__audioImg{
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  text-align: center;
  line-height: 300px;
  font-size: 50px;
  left: 300px;
  top: 200px;
}
</style>
