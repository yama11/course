<script>
/**
 * @overview 音乐场景 - 后景
 *
 * @author huojinzhao
 */

export default {
  name: 'ConcertBackground',

  props: {
    src: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    index: 0,

    currentAudio: '',
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
      this.audioPlay();

      const isConcertEnded =
        this.index >= this.src.audio.length;

      isConcertEnded && this.concertEnd();
    },

    audioPlay() {
      this.$refs.audio.pause();
      this.currentAudio = this.src.audio[this.index];

      this.$nextTick(() => {
        this.currentAudio && this.$refs.audio.play();
      });

      this.index = this.index + 1;
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
  <div class="concert-background">
    <audio
      ref="audio"
      :src="currentAudio"
    />
  </div>
</template>

<style lang="postcss">
.concert-background > audio {
  visibility: hidden;
}
</style>
