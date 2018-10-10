<script>
/**
 * @overview 打怪兽
 *
 * @author huojinzhao
 */

import PracticeWrapper from './components/Wrapper';

export default {
  name: 'PracticeMonster',

  components: {
    PracticeWrapper,
  },

  props: {
    src: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    loadingTheme: {
      bar: './practice/race/loading-bar.png',
      scene: './practice/race/loading-scene.png',
    },

    topicTheme: {
      board: './practice/race/board.png',
    },
  }),
};
</script>

<template>
  <div class="practice-monster">
    <PracticeWrapper
      :loading-theme="loadingTheme"
      :topic-theme="topicTheme"
      :topics="src.topic"
    >
      hello, world!
    </PracticeWrapper>
  </div>
</template>

<style lang="postcss">
.practice-monster {

}
</style>
