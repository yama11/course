<script>
/**
 * @overview 闪卡场景三 - 后景
 *
 * @author suyanping
 */

export default {
  name: 'FlashcardBackgroundModeThree',

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

      const insertObj = {
        url: this.src.answer.url,
        text: this.src.answer.text,
      };

      const newOptions = [...this.src.options];

      newOptions.splice(selectIndex, 0, insertObj);

      return newOptions;
    },

    animations() {
      return this.$animate.settle();
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
      this.isActive = data.isActive;

      this.isShow = true;

      if (!this.isActive) {
        this.$audio.play();
      }
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
    <div
      v-for="(item,index) in optionImg"
      :key="item.url"
      :class="animations[index]">
      <AppBackgroundCard
        :card="item.url"
        :text="item.text"
        :active="isActive || src.answer.select === answerList[index]"
      />
    </div>
  </div>
</template>

<style lang="postcss">

</style>
