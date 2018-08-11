<script>
/**
 * @overview 视频场景 - 前景
 *
 * @author huojinzhao
 */

export default {
  name: 'TelevisionForeground',

  data: () => ({
    director: {
      isPlaying: false,

      disabled: false,
    },
  }),

  created() {
    this.$ws.on(
      'directorCallback',
      this.directorControl,
    );
  },

  beforeDestroy() {
    this.$ws.off(
      'directorCallback',
      this.directorControl,
    );
  },

  methods: {
    directorControl({ data }) {
      this.director = { ...this.director, ...data };
    },

    directorBroadcast(state) {
      const eventType = 'directorBroadcast';

      const data = { state };

      this.$store.syncTeachGroupState(data, eventType);

      this.director.isPlaying = !this.director.isPlaying;
    },
  },
};
</script>

<template>
  <div class="television-foreground">
    <AppDirector
      :is-playing = "director.isPlaying"
      :disabled = "director.disabled"
      @control="directorBroadcast"
    />
  </div>
</template>

<style lang="postcss">
.television-foreground {

}
</style>
