/**
 * @overview  媒体部分前景mixin
 */

import { nativeMixSound } from '@/utils';

export default {

  data: () => ({
    mediaPlaying: false,

    isMixSoundEffective: true,
  }),

  created() {
    this.initMixSoundControl();

    this.$ws.on(
      'echoTeachGroupMediaState',
      this.controlMedia,
    );
  },

  beforeDestroy() {
    this.$ws.off(
      'echoTeachGroupMediaState',
      this.controlMedia,
    );

    this.mediaPlaying
      && nativeMixSound(0, this.isMixSoundEffective);
  },

  methods: {
    controlMedia({ data: { isPlaying } }) {
      this.mediaPlaying = isPlaying;

      isPlaying
        ? nativeMixSound(1, this.isMixSoundEffective)
        : nativeMixSound(0, this.isMixSoundEffective);
    },

    initMixSoundControl() {
      const { role } = this.$store.appInfo;

      const effective = {
        teacher: true,
        manager: this.$store.frameType === 'FrameVideo',
      };

      this.isMixSoundEffective = effective[role];
    },
  },
};
