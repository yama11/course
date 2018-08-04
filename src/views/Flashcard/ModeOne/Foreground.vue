<script>
/**
 * @overview 闪卡场景 - 前景
 *
 * @author huojinzhao
 */

import ForegroundCard from '../components/ForegroundCard';

export default {
  name: 'FlashcardForegroundModeOne',

  components: {
    ForegroundCard,
  },

  props: {
    src: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    director: {
      disabled: false,
    },
  }),

  created() {
    this.$ws.on(
      'directorCallback',
      this.controlDirectorState,
    );
  },

  beforeDestroy() {
    this.$ws.off(
      'directorCallback',
      this.controlDirectorState,
    );
  },

  methods: {
    directorBroadcast(state) {
      const eventType = 'directorBroadcast';

      const data = { state };

      this.$store.syncTeachGroupState(data, eventType);
    },
  },
};
</script>

<template>
  <div
    class="
      card-foreground
      module-card-container
      global-scene
    "
  >
    <ForegroundCard
      v-for="(item, index) in src.cards"
      :key="item.url"
      :index="index"
      :amount="10"
    />

    <AppDirector
      :disabled="director.disabled"
      @control="directorBroadcast"
    />
  </div>
</template>

<style lang="postcss">
.card-foreground {

}
</style>
