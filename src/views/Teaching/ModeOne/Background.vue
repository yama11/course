<script>
/**
 * @overview 音乐场景 - 后景
 *
 * @author huojinzhao
 */

export default {
  name: 'LearnBackgroundModeOne',

  props: {
    src: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    active: false,
  }),
};
</script>

<template>
  <div
    class="
      global-scene
      teaching-background
    "
  >
    <img
      v-if="src.card"
      :src="src.card"
      alt="展示卡"
    >
    <ul
      v-if="src.texts && src.texts.length"
      class="teaching-background__content"
    >
      <li
        v-for="text in src.texts"
        :key="text"
      >
        {{ text }}
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
.teaching-background {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 920px;
}

.teaching-background__content {
  box-sizing: border-box;
  padding: .8em .25em;
  width: 600px;
  border: 10px solid #f28d20;
  border-radius: 20px;
  background-color: white;
  color: #70370d;
  font-size: 36px;
  line-height: 1.3em;
  text-align: center;
  font-weight: bold;
}
</style>
