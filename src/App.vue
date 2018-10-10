<script>
/**
 * @overview 课件根组件
 *
 * @author huojinzhao
 */

import * as viewComponents from './views';

export default {
  name: 'App',

  components: viewComponents,

  computed: {
    currentAsset() {
      return this.$store.currentAsset;
    },

    componentName() {
      return this.currentAsset.type
        .split('')
        .reduce((acc, char, index) => {
          const isCapital = index === 0;

          return isCapital
            ? `${acc}${char.toUpperCase()}`
            : `${acc}${char}`;
        }, 'View');
    },

    componentKey() {
      const { step, section } = this.$store.state;

      return `${section}-${step}`;
    },
  },

  created() {
    // 初始化http请求
    this.$http.init({
      baseHeaders: {
        Authorization: `Bearer ${this.$store.appInfo.token}`,
      },
    });
  },
};
</script>

<template>
  <main id="app">
    <component
      :is="componentName"
      :key="componentKey"
      :asset="currentAsset"
    />

    <TheMenu
      v-if="$store.appInfo.scene !== 'background'"
    />
  </main>
</template>


<style lang="postcss">
#app {
  height: 100vh;
  min-height: 1080px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
