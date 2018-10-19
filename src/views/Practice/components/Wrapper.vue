<script>
/**
 * @overview 练习前置公共容器组件
 *
 * @author huojinzhao
 */

import { equipmentInform } from '@/utils';
import PracticeLoading from './Loading';
import PracticeTopic from './Topic';
import PracticeTime from './Time';

export default {
  name: 'PracticeWrapper',

  components: {
    PracticeLoading,
    PracticeTopic,
    PracticeTime,
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

    // 根据Time组件的主题props
    timeTheme: {
      type: Array,
      required: true,
    },

    // 题目资源
    topics: {
      type: Object,
      required: true,
    },

    // 场景图
    scene: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    loading: false,

    questioning: false,

    timing: false,
  }),

  computed: {
    isFirstMeet() {
      const { assets, forwardState } = this.$store;
      const { step, section } = forwardState;

      const forwardAsset = assets[section][step];

      return forwardAsset.type !== 'practice';
    },

    moduleName() {
      const { step, section } = this.$store.state;

      return `practice-${section}-${step}`;
    },

    style() {
      return {
        'background-image': `url(${this.scene})`,
      };
    },
  },

  created() {
    this.init();

    window.addEventListener(
      'equipmentCallback',
      this.equipmentCallback,
    );
  },

  beforeDestroy() {
    window.removeEventListener(
      'equipmentCallback',
      this.equipmentCallback,
    );
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

      this.timing = true;

      this.equipmentInform(this.timing);
    },

    timeTerminate() {
      this.timing = false;

      this.equipmentInform(this.timing);

      this.$emit('eventEnd');
    },

    equipmentInform(tag) {
      const type = 'practice';

      const data = { tag, type, name: this.moduleName };

      equipmentInform(data);
    },

    equipmentCallback({ detail: { name, student } }) {
      if (name !== this.moduleName) return;

      this.$emit('studentInfo', student);
    },
  },
};
</script>

<template>
  <div
    :style="style"
    class="
      practice-wrapper
      global-ground
      global-backdrop
    "
  >
    <slot/>

    <PracticeTime
      v-if="timing"
      :time-theme="timeTheme"
      @timeEnd="timeTerminate"
    />

    <PracticeTopic
      v-show="questioning"
      :board="topicTheme.board"
      :topics="topics"
      @topicEnd="topicTerminate"
    />

    <PracticeLoading
      v-if="loading"
      :scene="loadingTheme.scene"
      :bar="loadingTheme.bar"
      @end="loadingTerminate"
    />
  </div>
</template>

<style lang="postcss">
.practice-wrapper {
  z-index: 1;
}
</style>
