<script>
/**
 * @overview 空白页
 *
 * @author suyanping
 */

import Background from './Background';
import Foreground from './Foreground';

export default {
  name: 'ViewEmpty',

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
    class="view-empty"
  >
    <Background slot="background" />

    <Foreground slot="foreground" />
  </AppScene>
</template>

<style lang="postcss">
.view-empty {

}
</style>
