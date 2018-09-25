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
    playing: false,
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
      this.playing = true;
    },
  },
};
</script>

<template>
  <div class="television-background">
    <AppVideo
      v-model="playing"
      :src="src.video"
    />
  </div>
</template>

<style lang="postcss">

</style>
