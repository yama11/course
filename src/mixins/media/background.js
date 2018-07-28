/**
 * @overview  媒体部分后景mixin
 */

export default {

  props: {
    src: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    mediaIndex: 0,

    mediaPlaying: false,
  }),

  computed: {
    currentMedia() {
      return this.mediaAssets[this.mediaIndex];
    },
  },

  created() {
    this.$ws.on(
      'echoTeachGroupMediaState',
      this.controlMedia,
    );
  },

  beforeDestroy() {
    this.$_mixinMedia_mediaPause();

    this.$ws.off(
      'echoTeachGroupMediaState',
      this.controlMedia,
    );
  },

  methods: {
    controlMedia({ data: { isPlaying } }) {
      this.mediaPlaying = isPlaying;

      isPlaying
        ? this.$_mixinMedia_mediaPlay()
        : this.$_mixinMedia_mediaPause();
    },

    $_mixinMedia_mediaPlay() {
      this.mediaPlay
        ? this.mediaPlay()
        : this.$refs.media.play();
    },

    $_mixinMedia_mediaPause() {
      this.mediaPause
        ? this.mediaPause()
        : this.$refs.media.pause();
    },

    loadNextMedia() {
      this.$store.syncTeachGroupState(
        { isPlaying: false },
        'echoTeachGroupMediaState',
      );

      this.mediaIndex >= this.mediaAssets.length - 1
        ? (this.mediaIndex = 0)
        : (this.mediaIndex = this.mediaIndex + 1);
    },
  },
};
