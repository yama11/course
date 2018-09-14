<script>
/**
 * @overview 后景card - 视觉卡片
 *
 * @author huojinzhao
 */

export default {
  name: 'AppBackgroundCard',

  props: {
    card: {
      type: String,
      default: '',
    },

    text: {
      type: String,
      default: '',
    },

    active: {
      type: Boolean,
      default: true,
    },

    // 是否主题透明
    isTransparent: {
      type: Boolean,
      default: false,
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
      v-show="!isTransparent"
      :src="theme.front"
      class="app-background-card__front"
      alt="card-front"
    >
    <img
      v-show="!isTransparent"
      :src="theme.reverse"
      class="app-background-card__reverse"
      alt="card-reverse"
    >
    <div
      v-if="card"
      :style="{
        'background-image': `url(${card})`
      }"
      class="app-background-card__content"
    >
      {{ text }}
    </div>

    <slot
      name="card"/>
  </div>
</template>

<style lang="postcss">
.app-background-card {
  position: relative;
  transition: transform .5s ease-in;
  transform-style: preserve-3d;
  transform: perspective(800px) rotateY(180deg); /*no*/
}

.app-background-card > * {
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
}

.app-background-card--active {
  transform: perspective(800px) rotateY(0deg); /*no*/
}

.app-background-card__content {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 40px;
  font-weight: 600;
  padding-bottom: 1em;
  background-size: contain;
  background-position: center top;
  background-repeat: no-repeat;
}

.app-background-card__reverse {
  transform: rotateY(180deg);
}
</style>
