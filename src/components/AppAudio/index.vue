<script>
/**
 * @overview 音频播放
 *
 * @author suyanping
 */
import { nativeMixSound } from '@/utils';

export default {
  name: 'AppAudio',

  props: {
    src: {
      type: String,
      default: '',
    },
  },

  created() {
    this.$ws.on(
      'directorAudio',
      this.receiveAudioState,
    );
  },

  beforeDestroy() {
    this.$ws.off(
      'directorAudio',
      this.receiveAudioState,
    );

    nativeMixSound(0);
  },

  methods: {
    receiveAudioState({ data: { isPlaying } }) {
      const audio = this.$refs.audio;

      if (isPlaying) {
        audio.play();
        nativeMixSound(1);

        return;
      }

      audio.pause();

      nativeMixSound(0);
    },

    audioEnded() {
      nativeMixSound(0);
    },
  },

};
</script>

<template>
  <div class="app-audio">
    <audio
      ref="audio"
      :src="src"
      @ended="audioEnded"/>
  </div>
</template>

<style lang="postcss">

</style>
