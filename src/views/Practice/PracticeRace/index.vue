<script>
/**
 * @overview 赛跑
 *
 * @author suyanping
 */
import { createOptions } from '@/utils';
import PracticeWrapper from '../components/Wrapper';
import RaceOption from './RaceOption';
import RaceCount from './RaceCount';
import RaceStone from './RaceStone';

export default {
  name: 'PracticeRace',

  components: {
    PracticeWrapper,
    RaceOption,
    RaceCount,
    RaceStone,
  },

  props: {
    src: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      loadingTheme: {
        bar: './practice/race/loading-bar.png',
        scene: './practice/race/loading-scene.png',
      },

      topicTheme: {
        board: './practice/race/board.png',
      },

      timeTheme: [
        './practice/race/5.png',
        './practice/race/4.png',
        './practice/race/3.png',
        './practice/race/2.png',
        './practice/race/1.png',
      ],

      lightOne: {
        A: './practice/race/lightOne-1.png',
        B: './practice/race/lightOne-2.png',
        C: './practice/race/lightOne-3.png',
        D: './practice/race/lightOne-4.png',
      },

      lightTwo: {
        A: './practice/race/lightTwo-1.png',
        B: './practice/race/lightTwo-2.png',
      },

      selectList: ['A', 'B', 'C', 'D'],

      amountList: {
        A: [], B: [], C: [], D: [],
      },

      showResult: false,
    };
  },

  computed: {
    scene() {
      const optionLength = this.src.options.length;

      return (optionLength > 1)
        ? './practice/race/background-one.png'
        : './practice/race/background-two.png';
    },

    lightCss() {
      const answer = this.src.answer.select;

      const optionLength = this.src.options.length;

      const lightData = (optionLength > 1) ? this.lightOne : this.lightTwo;

      return {
        'background-image': `url(${lightData[answer]})`,
      };
    },

    optionCard() {
      const { answer, options } = this.src;

      return createOptions(answer.url, answer.select, options);
    },

    roleType() {
      const optionLength = this.src.options.length;

      return (optionLength > 1);
    },

    selectIndex() {
      const selectIndex = this.selectList
        .findIndex(item => item === this.src.answer.select);

      return selectIndex;
    },
  },

  methods: {
    eventDeal() {
      this.showResult = true;
    },

    getStudentList(data) {
      this.amountList[data.answer].push(data);
    },
  },
};
</script>

<template>

  <PracticeWrapper
    :loading-theme="loadingTheme"
    :topic-theme="topicTheme"
    :time-theme="timeTheme"
    :src="src"
    :scene="scene"
    class="practice-race"
    @eventEnd="eventDeal"
    @studentInfo="getStudentList"
  >
    <RaceOption
      :option-card="optionCard"
      :show-result="showResult"/>

    <RaceCount
      :role-type="roleType"
      :amount-list="amountList"
      :select-index="selectIndex"
      :show-result="showResult"/>

    <RaceStone
      v-if="showResult"
      :option-card="optionCard"
      :select-index="selectIndex"/>

  </PracticeWrapper>

</template>

<style lang="postcss">
.practice-race {

}

.practice-race__light{
  position: relative;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -200;
}
</style>
