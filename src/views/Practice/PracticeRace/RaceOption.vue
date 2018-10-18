<script>
/**
 * @overview 赛跑 - 卡片
 *
 * @author suyanping
 *
 */
export default {
  name: 'RaceOption',

  props: {
    // 选项的主题
    optionCard: {
      type: Array,
      default: () => [],
    },

    // 是否公布答案
    showResult: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      selectImg: './practice/race/option.png',

      rightImg: './practice/race/right.png',

      wrongImg: './practice/race/wrong.png',
    };
  },

  computed: {
    positionCss() {
      const lengths = this.optionCard.length;

      return (lengths > 2)
        ? 'justify-content: center'
        : 'justify-content: space-around';
    },

    rightSelect() {
      const { assets, state } = this.$store;
      const { step, section } = state;

      const currentAsset = assets[section][step];

      const { src } = currentAsset;

      return src.answer.select;
    },

  },

  methods: {

  },
};
</script>

<template>
  <div
    :style="positionCss"
    class="race-option">
    <div
      v-for="(item,index) in optionCard"
      :key="index">
      <div
        :style="{
          'background-image': `url(${selectImg})`
        }"
        class="race-option__block"
      >
        <span class="race-option__photo">
          <img :src="item.url">

          <img
            v-if="showResult && item.select === rightSelect"
            :src="rightImg">

          <img
            v-if="showResult && item.select !== rightSelect"
            :src="wrongImg">
        </span>

        <span class="race-option__select">
          {{ item.select }}
        </span>
      </div>
    </div>
  </div>
</template>


<style lang="postcss">
.race-option{
  width: 1250px;
  position: absolute;
  top: 92px;
  left: 300px;
  display: flex;
  z-index: -100;
}

.race-option__block{
  margin-left: 25px;
  display: inline-block;
  width: 290px;
  height: 463px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.race-option__photo{
  display: inline-block;
  width: 280px;
  height: 320px;
  background: white;
  border-radius: 10px;
  position: relative;
  left: 5px;
  top: 10px;
}

.race-option__photo img{
  position: absolute;
  width: 100%;
  height: 100%;
}

.race-option__select{
  display: inline-block;
  width: 100%;
  font-size: 48px;
  text-align: center;
  position: relative;
  top: 20px;
}
</style>
