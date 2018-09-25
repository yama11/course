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

    value: {
      type: Boolean,
      required: true,
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

      this.$emit('input', false);
      this.$store.syncTeachGroupState(data, eventType);
    },
  },

};
</script>

<template>
  <div
    v-show="value"
    class="app-video"
  >
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
.app-video {
  position: fixed;
  /* 电视显示 */
  top: 218px;
  left: 184px;
  width: 956px;
  height: 537px;
  /* 全屏显示
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  */
}

.app-video > video {
  height: 100%;
  width: 100%;
}
</style>
