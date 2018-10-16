<script>
/**
 * @overview 人物
 *
 * @author suyanping
 */

export default {
  name: 'PracticeRole',

  props: {
    // 名字
    name: {
      type: String,
      default: '',
    },

    // 头像url
    imgUrl: {
      type: String,
      default: '',
    },

    // 是否选中正确答案
    selectResult: {
      type: Boolean,
      default: false,
    },

    // 字体颜色
    textColor: {
      type: String,
      default: 'red',
    },
  },

  data() {
    return {

    };
  },

  computed: {
    styleColor() {
      return { color: this.textColor };
    },
  },

  methods: {

  },
};
</script>


<template>
  <div class="practice-role">

    <span
      class="practice-role__text">{{ name }}</span>

    <span
      v-if="selectResult"
      :style="styleColor"
      class="practice-role__score">
      +1
    </span>

    <img
      :src="imgUrl">
  </div>
</template>


<style lang="postcss">
.practice-role{
  display: inline-block；
}

.practice-role__text{
  color: white;
}

.practice-role__score{
  position: absolute;
  top: 15px;
  right: 2px;
}
</style>
