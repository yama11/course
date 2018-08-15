<script>
/**
 * @overview 闪卡场景二 - 前景
 *
 * @author suyanping
 */

import { equipmentInform } from '@/utils';
import ForegroundCard from '../components/ForegroundCard';

export default {
  name: 'FlashcardForegroundModeTwo',

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

    selectList: ['A', 'B', 'C', 'D'],

    indexImg: 0,

    intervalImg: '',

    isJump: false,

    // 控制器执行步进
    currIndex: 0,
  }),

  computed: {
    topicImg() {
      const newTopic = this.src.topic;

      newTopic.push(this.src.answer.url);

      const topicArr = newTopic.sort(() => (Math.random() - 0.5));

      return topicArr;
    },

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
      if (this.currIndex === 0) {
        this.intervalJump();
      }

      if (this.currIndex <= 1) {
        this.equipmentInform(Number(!this.currIndex));
      }

      this.currIndex >= 1 && this.backgroundInform();

      if (this.currIndex >= 1) {
        this.director.disabled = true;
      }

      this.currIndex = this.currIndex + 1;
    },

    intervalJump() {
      const lengths = this.topicImg.length - 1;

      this.intervalImg = setInterval(() => {
        if (this.indexImg < lengths) {
          this.indexImg = this.indexImg + 1;

          return;
        }

        clearInterval(this.intervalImg);

        this.isJump = true;

        this.backgroundShow();
      }, 1000);
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
        isJump: this.isJump,
      };

      this.$store.syncTeachGroupState(data, eventType);
    },

    backgroundInform() {
      const eventType = 'directorBroadcast';

      const data = {
        isJump: false,
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
      v-if="currIndex > 0 && !isJump"
      class="card-foreground__jump">
      <AppBackgroundCard
        v-for="(item,index) in topicImg"
        v-if="indexImg === index"
        :key="item + index"
        :card="item"/>
    </div>

    <div
      v-if="isJump">
      <ForegroundCard
        v-for="(item, index) in optionImg"
        :key="item"
        :active="checkCardActive(getLabel(index))"
        :label="getLabel(index)"
        :amount="amounts[getLabel(index)]"
      />
    </div>

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
.card-foreground__jump>div{
  position: absolute;
}
</style>
