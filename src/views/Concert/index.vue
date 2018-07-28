<script>
/**
 * @overview 音乐场景
 *
 * @author huojinzhao
 */

import Background from './Background';
import Foreground from './Foreground';

export default {
  name: 'ViewConcert',

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
    class="view-concert"
  >
    <!-- eslint-disable-next-line -->
    <Background slot="background" :src="asset.src" />

    <Foreground slot="foreground" />
  </AppScene>
</template>

<style lang="postcss">
.view-concert {

}
</style>
