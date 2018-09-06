<script>
/**
 * @overview 视频播放
 *
 * @author suyanping
 */
import { nativeMixSound } from '@/utils';

export default {
  name: 'AppVideo',

  props: {
    src: {
      type: String,
      default: '',
    },
  },

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

    nativeMixSound(0);
  },

  methods: {
    receiveDirectorState({ data: { state } }) {
      this.videoPlay(state.isPlaying);
    },

    videoPlay(isPlaying) {
      if (isPlaying) {
        this.$refs.video.play();

        nativeMixSound(1);

        return;
      }

      this.$refs.video.pause();

      nativeMixSound(0);
    },

    videoEnded() {
      const eventType = 'directorCallback';
      const data = { isPlaying: false };

      nativeMixSound(0);

      this.$store.syncTeachGroupState(data, eventType);
    },
  },

};
</script>

<template>
  <div class="app-video">
    <video
      ref="video"
      :src="src"
      controls
      preload
      @ended="videoEnded"
    />
  </div>
</template>

<style lang="postcss">
.app-video > video {
  position: absolute;
  top: 218px;
  left: 184px;
  width: 956px;
  height: 537px;
}
</style>
