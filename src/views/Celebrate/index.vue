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
};
</script>

<template>
  <AppScene
    :background="$store.theme.celebrate.background"
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
