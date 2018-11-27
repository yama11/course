<script>
/**
 * @overview 教学场景 - 一图多文
 *
 * @author suyanping
 */

export default {
  name: 'LearnForegroundModeThree',

  props: {
    src: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    director: {
      disabled: true,
    },
  }),

  computed: {
    animations() {
      return this.$animate.random();
    },

    texts() {
      return this.src.texts.filter(text => text)
        .map((item, index) => {
          const animate = this.animations[index + this.textAnimationAnchor];
          const className = `teaching-foreground__content ${animate}`;

          return { content: item, className };
        });
    },

    textAnimationAnchor() {
      return Number(!!this.src.card);
    },
  },

};
</script>

<template>
  <div class="teaching-three-foreground global-scene">
    <img
      v-if="src.card"
      :class="animations[0]"
      :src="src.card"
      alt="展示图片"
      class="teaching-three-img"
    >
    <span
      v-for="(item,index) in texts"
      :key="item.content + index"
      :class="item.className"
    >
      {{ item.content }}
    </span>

    <AppDirector :disabled="director.disabled" />
  </div>
</template>

<style lang="postcss" scoped>
.teaching-three-foreground {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 920px;
}

.teaching-three-img{
  width: 400px;
}

.teaching-foreground__content {
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
