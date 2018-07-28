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
    controlDirectorState({ data }) {
      this.director = { ...this.director, ...data };
    },
  },
};
</script>

<template>
  <div class="concert-foreground">
    <TheDirector
      :is-playing = "director.isPlaying"
      :disabled = "director.disabled"
    />
  </div>
</template>

<style lang="postcss">
.concert-foreground {

}
</style>
