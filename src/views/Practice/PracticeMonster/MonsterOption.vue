<script>
/**
 * @overview 大怪兽 - 选项组件
 *
 * @author huojinzhao
 */

export default {
  name: 'PracticeMonsterOption',

  props: {
    index: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      default: '',
    },
  },

  computed: {
    styleRoot() {
      const url = `./practice/monster/option-${this.index.toLowerCase()}.png`;

      return this.styleBackground(url);
    },

    styleContent() {
      return this.styleBackground(this.content);
    },
  },

  methods: {
    styleBackground(url) {
      return { 'background-image': `url(${url})` };
    },
  },
};
</script>

<template>
  <div
    :style="styleRoot"
    class="
      global-backdrop
      practice-monster__option
    "
  >
    <div
      :style="styleContent"
      class="monster-option__content"
    />
  </div>
</template>

<style lang="postcss">
.practice-monster__option {
  float: left;
  height: 632px;
  width: 528px;
  padding: 319px 174px 133px 134px;
}

.monster-option__content {
  height: 100%;
  width: 100%;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
