<script>
/**
 * @overview 音乐场景 - 前景
 *
 * @author huojinzhao
 */

export default {
  name: 'ConcertForeground',

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
    },
  },
};
</script>

<template>
  <div class="concert-foreground">
    <TheDirector
      :is-playing = "director.isPlaying"
      :disabled = "director.disabled"
      @control="directorBroadcast"
    />
  </div>
</template>

<style lang="postcss">
.concert-foreground {

}
</style>
