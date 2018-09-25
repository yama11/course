<script>
/**
 * @overview 闪卡场景二 - 后景
 *
 * @author suyanping
 */
import IntervalTime from '../components/IntervalTime';

export default {
  name: 'FlashcardBackgroundModeTwo',

  components: {
    IntervalTime,
  },

  props: {
    src: {
      type: Object,
      default: () => {},
    },
  },

  data: () => ({
    showTopic: false,

    isShow: false,

    answerList: ['A', 'B', 'C', 'D'],

    isActive: true,

    indexImg: 0,

    intervalImg: '',

    isStart: false,

  }),

  computed: {
    topicImg() {
      const newTopic = [...this.src.topic];

      newTopic.push(this.src.answer.url);

      const topicArr = newTopic.sort(() => (Math.random() - 0.5));

      return topicArr;
    },

    optionImg() {
      const selectIndex = this.answerList
        .findIndex(item => item === this.src.answer.select);

      const insertUrl = this.src.answer.url;

      const newOptions = [...this.src.options];

      newOptions.splice(selectIndex, 0, insertUrl);

      return newOptions;
    },

    animations() {
      return this.$animate.settle();
    },

    intervalAnimations() {
      const animation = this.$animate.settle()[0];

      return Array(this.optionImg.length)
        .fill(null)
        .map((item, index) => `${animation} delay-${1000 * index}`);
    },

    animationsRandom() {
      return this.$animate.random();
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

    clearInterval(this.intervalImg);
  },

  methods: {
    receiveDirectorState({ data }) {
      if (data.showTopic) {
        this.showTopic = true;

        this.intervalJump();

        return;
      }

      this.isActive = data.isActive;

      this.isShow = true;

      if (!this.isActive) {
        this.$audio.play();
      }
    },

    intervalJump() {
      const lengths = this.topicImg.length - 1;

      this.intervalImg = setInterval(() => {
        if (this.indexImg < lengths) {
          this.indexImg = this.indexImg + 1;

          return;
        }

        this.showTopic = false;

        this.isStart = true;

        this.isShow = true;

        this.foregroundShow();

        clearInterval(this.intervalImg);
      }, 1000);
    },

    foregroundShow() {
      const eventType = 'directorCallback';

      const data = {
        title: true,
      };

      this.$store.syncTeachGroupState(data, eventType);
    },

    changeControl() {
      const eventType = 'directorCallback';

      const data = {
        fianlTitle: true,
      };

      this.$store.syncTeachGroupState(data, eventType);
    },
  },
};
</script>

<template>
  <div
    class="
      global-scene
      global-card-container
      card-background
    "
  >

    <IntervalTime
      v-show="isStart"
      :times="10"
      :is-start="isStart"
      @finishInterval="changeControl"/>

    <div
      v-if="!isShow"
      :class="[animationsRandom[1], 'card-foreground__jump']">

      <AppBackgroundCard
        :active="showTopic">
        <div
          v-if="showTopic"
          slot="card"
          class="intervalCard"
        >
          <img
            v-for="(item,index) in topicImg"
            :key="item + index"
            :src="item"
            :class="intervalAnimations[index]">
        </div>
      </AppBackgroundCard>

    </div>

    <div
      v-for="(item,index) in optionImg"
      v-show="isShow"
      :key="item"
      :class="animations[index]">

      <AppBackgroundCard
        :card="item"
        :active="isActive || src.answer.select === answerList[index]"
      />

    </div>
  </div>
</template>

<style lang="postcss">
.card-foreground__jump{
  align-items: flex-start;
  left: 100px;
  top: 200px;
  position: relative;
}

.card-foreground__jump > div{
  position: absolute;
}
</style>
