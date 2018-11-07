<script>
/**
 * @overview 练习前置公共容器组件
 *
 * @author huojinzhao
 */

import { equipmentInform, AudioPlayer } from '@/utils';
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
      type: [String, Array],
      default: () => [],
    },
  },

  data: () => ({
    loading: false,

    questioning: false,

    timing: false,

    backVideo: new AudioPlayer('./audio/game.mp3'),

    cheerVideo: new AudioPlayer('./audio/cheer.mp3'),
  }),

  computed: {
    typeCounter() {
      const {
        currentAsset: { type, mode },
        steps,
        state: { step },
      } = this.$store;

      let current = 1;
      let rest = 0;

      steps.slice(0, step)
        .reverse()
        .every(({
          type: stepType,
          mode: stepMode,
        }) => {
          if (stepType !== type || stepMode !== mode) return false;

          current += 1;

          return true;
        });

      steps
        .slice(step + 1)
        .every(({
          type: stepType,
          mode: stepMode,
        }) => {
          if (stepType !== type || stepMode !== mode) return false;

          rest += 1;

          return true;
        });

      return { current, length: current + rest };
    },

    isFirstMeet() {
      return this.typeCounter.current === 1;
    },

    moduleName() {
      const { step, section } = this.$store.state;

      return `practice-${section}-${step}`;
    },

    style() {
      const url = []
        .concat(this.scene)
        .map(image => `url(${image})`)
        .join(',');

      return { 'background-image': url };
    },
  },

  created() {
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

    this.backVideo.pause();
    this.cheerVideo.pause();
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      if (this.isFirstMeet) {
        this.loading = true;

        return;
      }

      this.questioning = true;
      this.$refs.raceTopic.playAudio();
    },

    loadingTerminate() {
      this.loading = false;

      this.questioning = true;

      this.$refs.raceTopic.playAudio();
    },

    topicTerminate() {
      this.questioning = false;

      this.timing = true;

      this.playVideo();

      this.equipmentInform(1);
    },

    timeTerminate() {
      this.timing = false;

      this.equipmentInform(0);


      this.$emit('eventEnd');

      this.cheerVideo.play();

      setTimeout(this.forward, 2500);
    },

    forward() {
      const forwardState = this.$store.forwardState;

      this.$store.syncCurriculumState({ ...forwardState });
    },

    equipmentInform(tag) {
      const type = 'practice';

      const data = { tag, type, name: this.moduleName };

      equipmentInform(data);
    },

    equipmentCallback({ detail: { name, student } }) {
      if (name !== this.moduleName) return;

      this.$audio.play();

      this.$emit('studentInfo', student);
    },

    playVideo() {
      this.backVideo.play();
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
      ref="raceTopic"
      :board="topicTheme.board"
      :topics="topics"
      :counter="typeCounter"
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

.practice-wrapper__counter {
  position: fixed;
  font-size: 20px;
  color: red;
}
</style>
