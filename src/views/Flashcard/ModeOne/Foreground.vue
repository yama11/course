<script>
/**
 * @overview 闪卡场景 - 前景
 *
 * @author huojinzhao
 */

import { equipmentInform } from '@/utils';
import ForegroundCard from '../components/ForegroundCard';
import IntervalTime from '../components/IntervalTime';
import ToolTitle from '../components/ToolTitle';

export default {
  name: 'FlashcardForegroundModeOne',

  components: {
    ForegroundCard,
    IntervalTime,
    ToolTitle,
  },

  props: {
    src: {
      type: Object,
      required: true,
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

    title: 'Choose the one you like.',

    isStart: false,

    // 控制器执行步进
    index: 0,
  }),

  computed: {
    ranking() {
      const rankList = Object.keys(this.amounts)
        .map(key => ({ label: key, amount: this.amounts[key] }));

      return rankList.sort((a, b) => b.amount - a.amount);
    },

    moduleName() {
      const { step, section } = this.$store.state;

      return `flashcard-${section}-${step}`;
    },

    animations() {
      return this.$animate.settle();
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
      if (this.index === 0) {
        this.isStart = true;

        this.director.disabled = true;
      }

      this.index <= 1 && this.equipmentInform(Number(!this.index));

      this.index >= 1 && this.backgroundInform();

      const isFlashcardEnded = this.index === this.src.cards.length;

      if (isFlashcardEnded) {
        this.director.disabled = true;
      }

      this.index = this.index + 1;
    },

    changeControl() {
      this.director.disabled = false;
    },

    getLabel(index) {
      return ['A', 'B', 'C', 'D'][index];
    },

    equipmentInform(tag) {
      const type = 'flashcard';

      const data = { tag, type, name: this.moduleName };

      equipmentInform(data);
    },

    backgroundInform() {
      const { label } = this.ranking[this.index - 1];

      const eventType = 'directorBroadcast';

      const data = { label };

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

      return this.index > 0 && index === 0;
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
    "
  >

    <IntervalTime
      :times="10"
      :is-start="isStart"
      @finishInterval="changeControl"/>

    <ToolTitle
      :title="title"/>

    <ForegroundCard
      v-for="(item, index) in src.cards"
      :key="item.url"
      :active="checkCardActive(getLabel(index))"
      :label="getLabel(index)"
      :amount="amounts[getLabel(index)]"
      :class="animations[index]"
    />

    <AppDirector
      :disabled="director.disabled"
      @control="directorBroadcast"
    />
  </div>
</template>

<style lang="postcss">
.card-foreground {

}
</style>
