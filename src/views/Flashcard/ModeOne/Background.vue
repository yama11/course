<script>
/**
 * @overview 音乐场景 - 后景
 *
 * @author huojinzhao
 */

import BackgroundCard from '../components/BackgroundCard';

export default {
  name: 'ConcertBackgroundModeOne',

  components: {
    BackgroundCard,
  },

  props: {
    src: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    active: false,
  }),

  created() {
    this.$ws.on(
      'directorBroadcast',
      this.receiveDirectorState,
    );
  },

  beforeDestroy() {
    this.$ws.off(
      'directorBroadcast',
      this.receiveDirectorState,
    );
  },

  methods: {
    receiveDirectorState() {
      this.active = !this.active;
    },

    concertEnd() {
      const eventType = 'directorCallback';
      const data = { disabled: true };

      this.$store.syncTeachGroupState(data, eventType);
    },
  },
};
</script>

<template>
  <div
    class="
      global-scene
      module-card-container
      card-background
    "
  >
    <BackgroundCard
      v-for="item in src.cards"
      :key="item.url"
      :card="item.url"
      :text="item.text"
      :active="active"
    />
  </div>
</template>

<style lang="postcss">
.card-background {

}
</style>
