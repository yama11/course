<script>
/**
 * @overview 音频播放
 *
 * @author suyanping
 */
import { nativeMixSound, AudioPlayer } from '@/utils';

export default {
  name: 'AppAudio',

  props: {
    src: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      videoUrl: new AudioPlayer(this.src),
    };
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
      if (isPlaying) {
        nativeMixSound(1);

        const callback = () => {
          nativeMixSound(0);
        };

        this.videoUrl.echo({ callback });

        return;
      }

      this.videoUrl.pause();

      nativeMixSound(0);
    },
  },

};
</script>

<template>
  <div class="app-audio"/>
</template>

<style lang="postcss">

</style>
