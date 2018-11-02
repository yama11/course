<script>
/**
 * @overview 赛跑 - 统计显示各个选项的小孩
 *
 * @author suyanping
 */
import PracticeRole from '../components/Role';

export default {
  name: 'RaceCount',

  components: {
    PracticeRole,
  },

  props: {
    // 题目的选择类型
    roleType: {
      type: Boolean,
      default: false,
    },

    // 学生选择的统计
    amountList: {
      type: Object,
      default: () => {},
    },

    // 答案的索引
    selectIndex: {
      type: Number,
      default: 0,
    },

    // 是否公布答案
    showResult: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      roleImg: [
        './practice/race/role-1.png',
        './practice/race/role-2.png',
        './practice/race/role-3.png',
        './practice/race/role-4.png',
        './practice/race/role-5.png',
      ],

      selectList: ['A', 'B', 'C', 'D'],

      modeOne: [
        { transform: 'skew(-30deg)' },
        { transform: 'skew(30deg)', 'margin-left': '100px' },
      ],

      modeTwo: [
        { transform: 'skew(-30deg)', 'margin-left': '80px' },
        { transform: 'skew(-8deg)', 'margin-left': '40px' },
        { transform: 'skew(15deg)', 'margin-left': '20px' },
        { transform: 'skew(30deg)', 'margin-left': '60px' },
      ],

      roleOne: [
        { transform: 'skew(30deg)', width: '80px' },
        { transform: 'skew(-30deg)', width: '80px' },
      ],

      roleTwo: [
        { transform: 'skew(30deg)' },
        { transform: 'skew(8deg)' },
        { transform: 'skew(-15deg)' },
        { transform: 'skew(-30deg)' },
      ],
    };
  },

  computed: {
    showClass() {
      return this.roleType
        ? 'firRole'
        : 'secRole';
    },

    showCount() {
      return this.roleType ? this.modeTwo : this.modeOne;
    },

    roleCss() {
      return this.roleType ? this.roleTwo : this.roleOne;
    },
  },

  methods: {
    checkAnswer(index) {
      if (!this.showResult) return false;

      return this.selectIndex === index;
    },

    checkEmoji(index) {
      if (!this.showResult) return false;

      return this.selectIndex !== index;
    },

    getEachStudent(index) {
      const select = this.selectList[index];

      return this.amountList[select];
    },
  },
};
</script>


<template>
  <div
    :class="['race-count', showClass]">

    <div
      v-for="(item,index) in showCount"
      :key="index"
      :style="item"
      :class="selectIndex === index
        ?['race-count__block','race-count__show']
      :'race-count__block'">

      <div
        v-for="(roleItem,roleIndex) in getEachStudent(index)"
        :key="roleIndex"
        :style="roleCss[index]"
        class="race-count__role">

        <PracticeRole
          :name="roleItem.name"
          :img-url="roleImg[(roleIndex % 5)]"
          :select-result="checkAnswer(index)"
          :emoji-result="checkEmoji(index)"
          text-color="gold"/>

      </div>

    </div>
  </div>
</template>


<style lang="postcss">
.race-count{
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
}

.firRole{
  width: 1820px;
  left: 15px;
}

.firRole .race-count__block{
  width: 455px;
}

.secRole{
  width: 1530px;
  left: 200px;
}

.secRole .race-count__block{
  width: 765px;
}

.race-count__block{
  z-index: -200;
}

.race-count__show {
  z-index: -100;
}

.race-count__role {
  display: inline-block;
  text-align: center;
  width: 70px;
}

.race-count__role img{
  height: 60px;
}
</style>
