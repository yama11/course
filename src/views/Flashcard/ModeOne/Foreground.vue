<script>
/**
 * @overview 闪卡场景 - 前景
 *
 * @author huojinzhao
 */

import { equipmentInform } from '@/utils';
import ForegroundCard from '../components/ForegroundCard';

export default {
  name: 'FlashcardForegroundModeOne',

  components: {
    ForegroundCard,
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

    // 控制器执行步进
    index: 0,
  }),

  computed: {
    ranking() {
      const rankList = Object.keys(this.amounts)
        .map(key => ({ label: key, amount: this.amounts[key] }));

      return rankList.sort((a, b) => b.amount - a.amount);
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
      this.index <= 1 && this.equipmentInform(Number(!this.index));

      this.index >= 1 && this.backgroundInform();

      const isFlashcardEnded = this.index === this.src.cards.length;

      if (isFlashcardEnded) {
        this.director.disabled = true;
      }

      this.index = this.index + 1;
    },

    getLabel(index) {
      return ['A', 'B', 'C', 'D'][index];
    },

    equipmentInform(tag) {
      const data = { tag, type: 'flashcardModeOne' };

      equipmentInform(data);
    },

    backgroundInform() {
      const { label } = this.ranking[this.index - 1];

      const eventType = 'directorBroadcast';

      const data = { label };

      this.$store.syncTeachGroupState(data, eventType);
    },

    equipmentCallback({ detail: { type, data } }) {
      if (type === 'flashcardModeOne') {
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
    <ForegroundCard
      v-for="(item, index) in src.cards"
      :key="item.url"
      :active="checkCardActive(getLabel(index))"
      :label="getLabel(index)"
      :amount="amounts[getLabel(index)]"
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
