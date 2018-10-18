<script>
/**
 * @overview 大怪兽 - 答案组件
 *
 * @author huojinzhao
 */

import MonsterOption from './MonsterOption';

export default {
  name: 'PracticeMonsterAnswer',

  components: {
    MonsterOption,
  },

  props: {
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div
    :class="`practice-monster__answer--${options.length}`"
    class="practice-monster__answer"
  >
    <MonsterOption
      v-for="{ select, url } in options"
      :key="select"
      :index="select"
      :content="url"
    />
  </div>
</template>

<style lang="postcss">
.practice-monster__answer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
}

.practice-monster__option {
  position: absolute;
}

.practice-monster__answer--2 {
  .practice-monster__option:first-child {
    top: 286px;
    left: 276px;
  }

  .practice-monster__option:last-child {
    top: 298px;
    left: 1030px;
  }
}

.practice-monster__answer--4 {
  .practice-monster__option:first-child {
    top: 152px;
    left: 34px;
  }

  .practice-monster__option:nth-child(2) {
    top: 440px;
    left: 391px;
  }

  .practice-monster__option:nth-child(3) {
    top: 163px;
    left: 933px;
  }

  .practice-monster__option:last-child {
    top: 441px;
    left: 1319px;
  }
}
</style>
