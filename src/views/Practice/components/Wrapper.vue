<script>
/**
 * @overview 练习前置公共容器组件
 *
 * @author huojinzhao
 */

import PracticeLoading from './Loading';
import PracticeTopic from './Topic';

export default {
  name: 'PracticeWrapper',

  components: {
    PracticeLoading,
    PracticeTopic,
  },

  props: {
    // 根据Loading组件的主题props
    loadingTheme: {
      type: Object,
      required: true,
    },

    // 根据Topic组件的主题props
    topicTheme: {
      type: Object,
      required: true,
    },

    // 题目资源
    topics: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    loading: false,

    questioning: false,
  }),

  computed: {
    isFirstMeet() {
      const { assets, forwardState } = this.$store;
      const { step, section } = forwardState;

      const forwardAsset = assets[section][step];

      return forwardAsset.type !== 'practice';
    },
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      this.isFirstMeet
        ? (this.loading = true)
        : (this.questioning = true);
    },

    loadingTerminate() {
      this.loading = false;
      this.questioning = true;
    },

    topicTerminate() {
      this.questioning = false;

      this.$emit('topicEnd');
    },
  },
};
</script>

<template>
  <div class="practice-wrapper">
    <PracticeLoading
      v-if="loading"
      :scene="loadingTheme.scene"
      :bar="loadingTheme.bar"
      @end="loadingTerminate"
    />

    <PracticeTopic
      v-show="questioning"
      :board="topicTheme.board"
      :topics="topics"
      @topicEnd="topicTerminate"
    />

    <slot/>
  </div>
</template>

<style lang="postcss">
.practice-wrapper {

}
</style>
