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
    },

    getLabel(index) {
      return ['A', 'B', 'C', 'D'][index];
    },

    flashcardModeOneEnd() {
      const eventType = 'directorCallback';
      const data = { disabled: true };

      this.$store.syncTeachGroupState(data, eventType);
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
    <AppBackgroundCard
      v-for="(item, index) in src.cards"
      :key="item.url"
      :card="item.url"
      :text="item.text"
      :active="activeList.includes(getLabel(index))"
    />
  </div>
</template>

<style lang="postcss">
.card-background {

}
</style>
