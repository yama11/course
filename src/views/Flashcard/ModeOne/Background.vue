<script>
/**
 * @overview 音乐场景 - 后景
 *
 * @author huojinzhao
 */

export default {
  name: 'FlashcardBackgroundModeOne',

  props: {
    src: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    activeList: [],
  }),

  computed: {
    animations() {
      return this.$animate.settle();
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
  },

  methods: {
    receiveDirectorState({ data: { label } }) {
      this.activeList = [...this.activeList, label];

      this.$audio.play();
    },

    getLabel(index) {
      return ['A', 'B', 'C', 'D'][index];
    },
  },
};
</script>

<template>
  <div
    class="
      global-scene
      global-card-container
      card-background
    "
  >

    <div
      v-for="(item, index) in src.cards"
      :key="item.url"
      :class="animations[index]">

      <AppBackgroundCard
        :card="item.url"
        :text="item.text"
        :active="activeList.includes(getLabel(index))"/>

    </div>

  </div>
</template>

<style lang="postcss">
.card-background {

}
</style>
