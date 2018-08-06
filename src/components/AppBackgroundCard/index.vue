<script>
/**
 * @overview 后景card - 视觉卡片
 *
 * @author huojinzhao
 */

export default {
  name: 'AppBackgroundCard',

  props: {
    // 内容卡牌图片地址
    card: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      default: '',
    },

    // 卡牌是否翻转正面
    active: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    theme() {
      return this.$store.theme.card;
    },
  },
};
</script>

<template>
  <div
    :class="[
      'global-card-item',
      'app-background-card',
      {
        'app-background-card--active': active,
      }
    ]"
  >
    <img
      :src="theme.reverse"
      class="
        app-background-card__reverse
        app-background-card__element
      "
      alt="card-reverse"
    >
    <img
      :src="theme.front"
      class="
        app-background-card__front
        app-background-card__element
      "
      alt="card-front"
    >
    <div
      :style="{
        'background-image': `url(${card})`
      }"
      class="
        global-backdrop
        app-background-card__content
        app-background-card__element
      "
    >
      {{ text }}
    </div>
  </div>
</template>

<style lang="postcss">
.app-background-card {
  position: relative;
  transition: transform .5s ease-in;
  transform-style: preserve-3d;
  transform: perspective(800px) rotateY(180deg); /*no*/
}

.app-background-card--active {
  transform: perspective(800px) rotateY(0deg); /*no*/
}

.app-background-card__element {
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
}

.app-background-card__content {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 40px;
  font-weight: 600;
  padding-bottom: 1em;
}

.app-background-card__reverse {
  transform: rotateY(180deg);
}
</style>
