<script>
/**
 * @overview 结算页
 *
 * @author huojinzhao
 */

import Background from './Background';
import Foreground from './Foreground';

export default {
  name: 'ViewBoot',

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
    class="view-boot"
  >
    <Background slot="background" />

    <!-- eslint-disable-next-line -->
    <Foreground slot="foreground" :src="asset.src" />
  </AppScene>
</template>

<style lang="postcss">
.view-boot {

}
</style>
