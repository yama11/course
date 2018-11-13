<script>
/**
 * @overview 打怪兽
 *
 * @author huojinzhao
 */

import { createOptions } from '@/utils';
import PracticeWrapper from '../components/Wrapper';
import MonsterAnswer from './MonsterAnswer';
import MonsterHunter from './MonsterHunter';
import MonsterSwirl from './MonsterSwirl';

export default {
  name: 'PracticeMonster',

  components: {
    PracticeWrapper,
    MonsterAnswer,
    MonsterHunter,
    MonsterSwirl,
  },

  props: {
    src: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    loadingTheme: {
      bar: './practice/monster/loading-bar.png',
      scene: './practice/monster/loading-scene.png',
    },

    topicTheme: {
      board: './practice/monster/board.png',
    },

    timeTheme: [
      './practice/monster/time5.png',
      './practice/monster/time4.png',
      './practice/monster/time3.png',
      './practice/monster/time2.png',
      './practice/monster/time1.png',
    ],

    avatars: [
      './practice/monster/avatar5.png',
      './practice/monster/avatar4.png',
      './practice/monster/avatar3.png',
      './practice/monster/avatar2.png',
      './practice/monster/avatar1.png',
    ],

    practicers: [],

    isHunt: false,

    scene: [
      './practice/monster/bg-active.png',
      './practice/monster/bg-terminate.png',
    ],
  }),

  computed: {
    options() {
      const { options, answer } = this.src;

      return createOptions(answer.url, answer.select, options);
    },

    isKill() {
      return this.scene.length === 1;
    },
  },

  methods: {
    beginHunt() {
      this.isHunt = true;

      setTimeout(this.killMonster, 1400);
    },

    killMonster() {
      this.scene.shift();

      this.$audio.play();
    },

    checkAnswer(answer) {
      return answer === this.src.answer.select && this.isHunt;
    },

    receiveStudentAnswer(student) {
      this.practicers.push(student);
    },
  },
};
</script>

<template>
  <PracticeWrapper
    :loading-theme="loadingTheme"
    :topic-theme="topicTheme"
    :time-theme="timeTheme"
    :src="src"
    :scene="scene"
    class="practice-monster"
    @studentInfo="receiveStudentAnswer"
    @eventEnd="beginHunt"
  >
    <MonsterSwirl v-show="isKill" />

    <MonsterAnswer
      v-show="!isHunt"
      :options="options"
    />

    <div class="global-position-left">
      <MonsterHunter
        v-for="(item, index) in practicers.slice(0, 5)"
        :result="checkAnswer(item.answer)"
        :key="item.id"
        :name="item.name"
        :img-url="avatars[index % 5]"
      />
    </div>
    <div class="global-position-right">
      <MonsterHunter
        v-for="(item, index) in practicers.slice(5, 10)"
        :result="checkAnswer(item.answer)"
        :key="item.id"
        :name="item.name"
        :img-url="avatars[(index + 1) % 5]"
      />
    </div>
    <div class="practice-monster__seat-top">
      <MonsterHunter
        v-for="(item, index) in practicers.slice(10, 18)"
        :result="checkAnswer(item.answer)"
        :key="item.id"
        :name="item.name"
        :img-url="avatars[(index + 2) % 5]"
      />
    </div>
    <div class="practice-monster__seat-bottom">
      <MonsterHunter
        v-for="(item, index) in practicers.slice(18, 26)"
        :result="checkAnswer(item.answer)"
        :key="item.id"
        :name="item.name"
        :img-url="avatars[(index + 3) % 5]"
      />
    </div>
  </PracticeWrapper>
</template>

<style lang="postcss">
.practice-monster {
  display: flex;
  flex-direction: column-reverse;

  .practice-role {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 30px;
  }

  .practice-role > img {
    width: 100px;
  }

  .global-position-left,
  .global-position-right {
    z-index: -1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }

  .global-position-right img {
    transform: rotateY(180deg);
  }
}

.practice-monster__seat-top,
.practice-monster__seat-bottom {
  z-index: -1;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 150px;
}
</style>
