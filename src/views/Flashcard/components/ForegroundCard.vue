<script>
/**
 * @overview 前景card - 交互卡片
 *
 * @author huojinzhao
 */

export default {
  name: 'ForegroundCard',

  props: {
    // 选择人数
    amount: {
      type: Number,
      default: 0,
    },

    // 顺序索引，映射选项
    index: {
      type: Number,
      required: true,
    },
  },

  computed: {
    label() {
      return ['A', 'B', 'C', 'D'][this.index];
    },

    theme() {
      return this.$store.theme.student;
    },
  },
};
</script>

<template>
  <div class="foreground-card module-card-item">
    <div class="foreground-card__amount">
      <i>{{ label }}</i>
      <span
        :style="{
          'background-image': `url(${theme.avatar})`
        }"
        class="global-backdrop"
      />
      <span>{{ amount }}</span>
    </div>
  </div>
</template>

<style lang="postcss">
.foreground-card {

}

.foreground-card__amount {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  top: calc(100% + 10px);
}

.foreground-card__amount > i {
  margin-right: 20px;
  font-style: normal;
  font-size: 2.5em;
  font-weight: bold;
  color: white;
}

.foreground-card__amount > span:first-of-type {
  z-index: 1;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 3px solid #b38760;
}

.foreground-card__amount > span:last-of-type {
  margin-left: -1em;
  padding: 3px .5em 3px 1em;
  border-radius: 25px;
  background-color: #b38760;
  font-weight: bolder;
  font-size: 38px;
  color: #843d0d;
}
</style>
