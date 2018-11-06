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
    style: {},

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
      value && setTimeout(this.attack, (Math.random() / 2) * 1000);
    },
  },

  methods: {
    attack() {
      const { innerWidth, innerHeight } = window;
      const { left, top } = this.$refs.root.getBoundingClientRect();
      const targetX = (innerWidth / 2) - ((28 / 1920) * innerWidth);
      const targetY = (innerHeight / 2) - ((27 / 1920) * innerHeight);
      const x = targetX - left;
      const y = targetY - top;

      this.style = { transform: `translate(${x}px, ${y}px)` };
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
    <div
      :class="classes"
      :style="style"
      class="practice-monster__attack"
      @transitionend="kill"
    >
      <span
        :style="{
          'background-image': 'url(practice/monster/star.png)',
        }"
        class="global-backdrop"
      />
    </div>
    <Practicer
      v-bind="this.$attrs"
      :select-result="isCorrect"
    />
  </div>
</template>

<style lang="postcss">
.practice-monster__hunter {
  position: relative;
  width: 160px;
  height: 160px;
}

.practice-monster__hunter .practice-role__score {
  top: calc(100% - 20px);
  right: 0;
  color: #FFF45C !important;
}

.practice-monster__attack {
  position: absolute;
  top: 0;
  left: 0;
  width: 57px;
  height: 54px;
  transition: all 1.2s ease-in;
}

.practice-monster__attack--inactive {
  visibility: hidden;
}

.practice-monster__attack--active {
  visibility: visible;
  opacity: 0;
}

.practice-monster__attack > span {
  display: block;
  width: 100%;
  height: 100%;;
  animation: p-m-rotate .5s linear infinite;
}

@keyframes p-m-rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
