<script>
/**
 * @overview cocos动画
 *
 * @author yehaifeng
 */

import Background from './Background';
import Foreground from './Foreground';

export default {
  name: 'Cocos',

  components: {
    Background,
    Foreground,
  },

  props: {
    asset: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <AppScene
    :foreground="asset.scene.foreground"
    :background="asset.scene.background"
    class="view-cocos"
  >
    <!-- eslint-disable-next-line -->
    <Background slot="background" :src="asset.src" />

    <Foreground
      slot="foreground"
      :src="asset.src"/>
  </AppScene>
</template>

<style lang="postcss">
.view-concert {

}
</style>
