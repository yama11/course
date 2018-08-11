<script>
/**
 * @overview 视频场景
 *
 * @author huojinzhao
 */

import Background from './Background';
import Foreground from './Foreground';

export default {
  name: 'ViewTelevision',

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
    class="view-television"
  >
    <!-- eslint-disable-next-line -->
    <Background slot="background" :src="asset.src" />

    <Foreground slot="foreground" />
  </AppScene>
</template>

<style lang="postcss">
.view-television {

}
</style>
