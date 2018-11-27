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

  computed: {
    animations() {
      return this.$animate.random();
    },

    texts() {
      return this.src.texts.filter(text => text)
        .map((item, index) => {
          const animate = this.animations[index + this.textAnimationAnchor];
          const className = `teaching-background__content ${animate}`;

          return { content: item, className };
        });
    },

    textAnimationAnchor() {
      return Number(!!this.src.card);
    },
  },

  created() {
    setTimeout(() => {
      this.$audio.play();
    }, 200);
  },
};
</script>

<template>
  <div class="global-scene teaching-background">
    <img
      v-if="src.card"
      :class="animations[0]"
      :src="src.card"
      alt="展示图片"
    >
    <span
      v-for="item in texts"
      :key="item.content"
      :class="item.className"
    >
      {{ item.content }}
    </span>
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
  margin-bottom: 10px;
}
</style>
