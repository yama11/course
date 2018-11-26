<script>
/**
 * @overview 游戏
 * @author   suyanping
 */

import Foreground from './Foreground';

export default {
  name: 'ViewGame',

  components: {
    Foreground,
  },

  props: {
    asset: {
      type: Object,
      required: true,
    },
  },

  data: () => ({

  }),
};
</script>

<template>
  <AppScene
    :foreground="asset.scene.foreground"
    :background="asset.scene.background"
    class="view-game"
  >
    <Foreground
      slot="foreground"
      :src="asset.src"/>
  </AppScene>
</template>

<style lang="postcss">
.view-game{
  z-index: 1;
}
</style>

