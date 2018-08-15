<script>
/**
 * @overview 闪卡场景二 - 后景
 *
 * @author suyanping
 */

export default {
  name: 'FlashcardBackgroundModeTwo',

  props: {
    src: {
      type: Object,
      default: () => {},
    },
  },

  data: () => ({
    isShow: false,

    answerList: ['A', 'B', 'C', 'D'],

    isActive: false,

  }),

  computed: {
    optionImg() {
      const selectIndex = this.answerList
        .findIndex(item => item === this.src.answer.select);

      const insertUrl = this.src.answer.url;

      const newOptions = [...this.src.options];

      newOptions.splice(selectIndex, 0, insertUrl);

      return newOptions;
    },
  },

  created() {
    this.$ws.on(
      'directorBroadcast',
      this.receiveDirectorState,
    );
  },

  beforeDestroy() {
    this.$ws.off(
      'directorBroadcast',
      this.receiveDirectorState,
    );
  },

  methods: {
    receiveDirectorState({ data }) {
      this.isActive = data.isJump;

      this.isShow = true;
    },
  },
};
</script>

<template>
  <div
    v-if="isShow"
    class="
      global-scene
      global-card-container
      card-background
    "
  >
    <AppBackgroundCard
      v-for="(item,index) in optionImg"
      :key="item"
      :card="item"
      :active="isActive || src.answer.select === answerList[index]"
    />
  </div>
</template>

<style lang="postcss">

</style>
