<script>
/**
 * @overview 视频场景 - 后景
 *
 * @author huojinzhao
 */

export default {
  name: 'TelevisionBackground',

  props: {
    src: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    start: false,
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
    receiveDirectorState({ data: { state } }) {
      this.start = true;

      this.videoPlay(state.isPlaying);
    },

    videoPlay(isPlaying) {
      isPlaying
        ? this.$refs.video.play()
        : this.$refs.video.pause();
    },

    videoEnded() {
      const eventType = 'directorCallback';
      const data = { isPlaying: false };

      this.$store.syncTeachGroupState(data, eventType);
    },
  },
};
</script>

<template>
  <div class="television-background">
    <video
      v-show="start"
      ref="video"
      :src="src.video"
      controls
      preload
      @ended="videoEnded"
    />
  </div>
</template>

<style lang="postcss">
.television-background > video {
  position: absolute;
  top: 218px;
  left: 184px;
  width: 956px;
  height: 537px;
}
</style>
