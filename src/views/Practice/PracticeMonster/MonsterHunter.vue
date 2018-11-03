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
    style: {
      'transition-delay': `${Math.random() / 3}s`,
      'background-image': 'url(practice/monster/star.png)',
    },

    isCorrect: false,
  }),

  computed: {
    classes() {
      return this.result
        ? 'practice-monster__attack--active'
        : 'practice-monster__attack--inactive';
    },
  },

  watch: {
    result(value) {
      value && this.attack();
    },
  },

  mounted() {
    this.initAttack();
  },

  methods: {
    initAttack() {
      const { x, y } = this.$refs.root.getBoundingClientRect();
      const top = `${y}px`;
      const left = `${x}px`;

      this.style = { top, left, ...this.style };
    },

    attack() {
      const { top, left, ...rest } = this.style;

      this.style = rest;
    },

    kill() {
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
      :class="classes"
      :style="style"
      class="
        global-backdrop
        practice-monster__attack
      "
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
  transition: all 1s .2s ease-in;
  animation: p-m-rotate .5s linear infinite;
}

.practice-monster__attack--inactive {
  visibility: hidden;
}

.practice-monster__attack--active {
  visibility: visible;
  opacity: 0;
  left: calc(50vw - 28px);
  top: calc(50vh - 27px);
}

@keyframes p-m-rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
