<script>
/**
 * @overview stone 掉落效果
 *
 * @author suyanping
 */

export default {
  name: 'RaceStone',

  props: {
    optionCard: {
      type: Array,
      default: () => [],
    },

    selectIndex: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      stoneUrl: './practice/race/stone.png',

      selectList: ['A', 'B', 'C', 'D'],

      modeOne: [
        { 'margin-left': '170px' },
        { 'margin-left': '330px' },
      ],
    };
  },

  computed: {
    stoneCss() {
      const lengths = this.optionCard.length;

      return (lengths > 2)
        ? 'justify-content: center'
        : 'justify-content: space-around';
    },

    stoneTypeCss() {
      const lengths = this.optionCard.length;

      return (lengths > 2) ? Array(4).fill('') : this.modeOne;
    },
  },

  methods: {

  },
};
</script>

<template>
  <div
    :style="stoneCss"
    class="race-stone"
  >
    <div
      v-for="(item,index) in optionCard"
      :key="item.select"
      :style="stoneTypeCss[index]"
      class="race-stone__block"
    >
      <img
        v-if="index !== selectIndex"
        :src="stoneUrl">
    </div>
  </div>
</template>

<style lang="postcss">
.race-stone {
  width: 1400px;
  position: absolute;
  left: 200px;
  z-index: -100;
}

.race-stone__block {
  display: inline-block;
  width: 350px;
  height: 400px;
  animation: drop-in 1s ease-in, drop-out 1s 1s ease-out forwards;
}

.race-stone__block > img{
  width: 450px;
  height: 100%;
  animation: horizen-tremble .4s 1s ease-in infinite;
}

@keyframes horizen-tremble {
  from {
    transform: translate3d(0, 0, 0);
  }

  25% {
    transform: translate3d(-200px, 0, 0);
  }

  75% {
    transform: translate3d(200px, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes drop-in {
  from {
    transform: translate3d(0, -1000px, 0);
  }

  90% {
    transform: translate3d(0, 550px, 0);
  }

  to {
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes drop-out {
  from {
    transform: translate3d(0, 500px, 0);
  }

  to {
    transform: translate3d(0, 1200px, 0);
  }
}
</style>
