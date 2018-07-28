<script>
/**
 * @overview 菜单
 *
 * @author huojinzhao
 */

export default {
  name: 'TheMenu',

  computed: {
    theme() {
      return this.$store.theme.menu;
    },

    menuList() {
      return Object.keys(this.theme);
    },
  },

  methods: {
    navigate(section) {
      this.$store.syncCurriculumState({ section });
    },
  },
};
</script>

<template>
  <nav class="the-menu">
    <a
      v-for="key in menuList"
      :key="key"
      :class="{
        'the-menu__item': true,
        'the-menu__item--active': $store.state.section === key,
      }"
      @click="() => navigate(key)"
    >
      <img
        :src="theme[key].icon"
        class="the-menu__item-icon"
        alt="icon"
      >
      <img
        :src="theme[key].title"
        class="the-menu__item-title"
        alt="slogan"
      >
    </a>
  </nav>
</template>

<style lang="postcss">
.the-menu {
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  top: 0;
  right: 0;
  margin: 0;
  height: 100%;
}

.the-menu__item {
  cursor: pointer;
  transform: translateX(140px);
  transition: all .2s ease-in .15s;
}

.the-menu__item:hover {
  transform: translateX(0);
}

.the-menu__item-icon {
  position: relative;
  z-index: 1;
  width: 140px;
  height: 140px;
  filter: grayscale(100%) opacity(0.3);
  transform: scale(0.8);
  transition: all .1s ease-in .2s;
}

.the-menu__item--active .the-menu__item-icon {
  filter: grayscale(0) opacity(1);
  transform: scale(1.2);
}

.the-menu__item:hover .the-menu__item-icon {
  filter: grayscale(0);
  transform: scale(1);
}

.the-menu__item-title {
  opacity: 0;
  margin-left: -140px;
  width: 280px;
  height: 140px;
  transition: opacity .2s ease-in .1s;
}

.the-menu__item:hover .the-menu__item-title {
  opacity: 1;
}
</style>
