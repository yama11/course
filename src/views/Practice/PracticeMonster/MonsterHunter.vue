<script>
/**
 * @overview 打怪兽 - 怪兽猎人
 *
 * @author huojinzhao
 */

import Practicer from '../components/Role';

export default {
  name: 'PracticeMonsterHunter',

  components: {
    Practicer,
  },

  props: {
    // 是否开始打击
    result: {
      type: Boolean,
      default: true,
    },
  },

  data: () => ({
    position: {
      x: 0,
      y: 0,
    },

    isHunt: false,

    isCorrect: false,
  }),

  computed: {
    style() {
      const { x, y } = this.position;

      if (!x && !y) return null;

      const image = 'url(./practice/monster/star.png)';
      const delay = `${Math.random() / 3}s`;

      return {
        top: `${y}px`,
        left: `${x}px`,
        'transition-delay': delay,
        'background-image': image,
      };
    },
  },

  watch: {
    result(value) {
      if (value) {
        this.isHunt = true;
        this.$nextTick(this.hunt);
      }
    },
  },

  mounted() {
    this.position = this.$refs.root.getBoundingClientRect();
  },

  methods: {
    hunt() {
      const {
        width: deltaX,
        height: deltaY,
      } = this.$refs.star.getBoundingClientRect();

      const x = (window.innerWidth / 2) - deltaX;
      const y = (window.innerHeight / 2) - deltaY;

      this.position = { x, y };
    },

    kill() {
      this.$emit('change');

      this.isHunt = false;
      this.isCorrect = true;
    },
  },
};
</script>

<template>
  <div
    ref="root"
    class="practice-monster__hunter"
  >
    <span
      v-if="isHunt"
      ref="star"
      :style="style"
      class="practice-monster__attack"
      @transitionend="kill"
    />
    <Practicer
      v-bind="this.$attrs"
      :select-result="isCorrect"
    />
  </div>
</template>

<style lang="postcss">
.practice-monster__hunter {
  width: 160px;
  height: 160px;
}

.practice-monster__hunter .practice-role__score {
  top: calc(100% - 20px);
  right: 0;
  color: #FFF45C !important;
}

.practice-monster__attack {
  position: fixed;
  display: block;
  width: 57px;
  height: 54px;
  animation: practiceMonsterStar 1s linear infinite;
  transition: all 1s ease-in;
}

@keyframes practiceMonsterStar {
  to {
    transform: rotate(360deg);
  }
}
</style>
