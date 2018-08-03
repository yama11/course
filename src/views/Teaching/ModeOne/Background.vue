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
      teachingbackground
    "
  >
    <img
      v-if="src.card"
      :src="src.card"
      alt="展示卡"
    >
    <span
      v-for="text in src.texts"
      :key="text"
    >
      {{ text }}
    </span>
  </div>
</template>

<style lang="postcss">
.teachingbackground {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 850px;
}

.teachingbackground > img {
  width: 350px;
  height: 350px;
}

.teachingbackground > span {
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: bolder;
}
</style>
