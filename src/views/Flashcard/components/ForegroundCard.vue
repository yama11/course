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

    // 选项
    label: {
      type: String,
      required: true,
    },

    // 是否第一激活
    active: {
      type: Boolean,
      default: false,
    },

    // 是否显示
    showCard: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    theme() {
      return this.$store.theme.student;
    },
  },
};
</script>

<template>
  <div
    v-if="showCard"
    class="foreground-card global-card-item">
    <div class="foreground-card__amount">
      <i>{{ label }}</i>
      <span
        :style="{
          'background-image': `url(${theme.avatar})`
        }"
        class="global-backdrop"
      />
      <span :class="active ? 'foreground-card--active' : ''">
        {{ amount }}
      </span>
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
  margin-left: -6px;
  padding: 0px 20px 0px 20px;
  border-radius: 25px;
  background-color: #b38760;
  font-weight: bolder;
  font-size: 38px;
  color: #843d0d;
}

.foreground-card__amount > span:last-of-type.foreground-card--active {
  background-color: white;
}
</style>
