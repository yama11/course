<script>
/**
 * @overview 结算页
 *
 * @author huojinzhao
 */

import Background from './Background';
import Foreground from './Foreground';

export default {
  name: 'ViewCelebrate',

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
    class="view-celebrate"
  >
    <Background slot="background" />

    <Foreground slot="foreground" />
  </AppScene>
</template>

<style lang="postcss">
.view-celebrate {

}
</style>
