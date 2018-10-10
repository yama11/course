<script>
/**
 * @overview 练习题目组件
 *
 * @author suyanping
 */

export default {
  name: 'PracticeTopic',

  props: {
    topics: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isShow: true,

      isAnimationEnd: false,
    };
  },

  computed: {
    style() {
      const base = {
        'background-image': `url(${this.topics.background})`,
      };

      return this.isAnimationEnd
        ?
        {
          ...base,
          'animation-name': 'practice-topic-leave',
          'animation-duration': '1s',
          'animation-timing-function': 'ease-out',
        }
        :
        base;
    },

    questionStyle() {
      return this.isAnimationEnd
        ?
        {
          'animation-name': 'practice-question-leave',
          'animation-duration': '1.5s',
          'animation-timing-function': 'ease-out',
        }
        :
        {
          'animation-name': 'practice-question-in',
          'animation-duration': '1.5s',
          'animation-timing-function': 'ease-out',
        };
    },

    animations() {
      return this.$animate.settle();
    },
  },

  created() {
    if (this.topics.audio.url) {
      this.audioPlay(true);
    }

    setTimeout(() => {
      this.isAnimationEnd = true;

      setTimeout(() => {
        this.isShow = false;

        this.$emit('topicEnd');
      }, 1000);
    }, 5000);
  },

  methods: {
    audioPlay(isPlaying) {
      const eventType = 'directorAudio';

      const data = {
        isPlaying,
      };

      this.$store.syncTeachGroupState(data, eventType);
    },
  },
};
</script>

<template>
  <div
    v-if="isShow"
    class="practice-topic">
    <div
      :style="style"
      :class="['practice-topic__board', animations[1]]"/>

    <div
      :style="questionStyle"
      class="practice-topic__content">
      <div
        class="practice-topic__title">
        请看提示，选择正确的选项
      </div>
      <div class="practice-topic__question">

        <div
          v-if="topics.url"
          class="practice-topic__picture">
          <img :src="topics.url">
        </div>

        <div
          v-if="topics.text"
          class="practice-topic__text">
          {{ topics.text }}
        </div>

        <div
          v-if="topics.audio.picture"
          class="practice-topic__audio">
          <img :src="topics.audio.picture">

          <AppAudio :src="topics.audio.url"/>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.practice-topic {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.practice-topic__board{
  width: 1100px;
  height: 923px;
  margin: 0 auto;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.practice-topic__content{
  position: relative;
  width: 1100px;
  height: 923px;
  text-align: center;
  margin: -580px auto;
}

.practice-topic__title{
  font-size: 36px;
}

.practice-topic__question{
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.practice-topic__picture>img{
  width: 200px;
  height: 200px;
}

.practice-topic__text{
  font-size: 60px;
}

.practice-topic__audio>img{
  width: 300px;
  height: 150px;
}

@keyframes practice-topic-leave {
  to {
    transform: translateY(-1000px);
  }
}

@keyframes practice-question-in {
  from {
    opacity: 0;
  }

  30% {
    opacity: 0.3;
  }

  60% {
    opacity: 0.6;
  }

  to {
    opacity: 1;
  }
}

@keyframes practice-question-leave {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }

}
</style>
