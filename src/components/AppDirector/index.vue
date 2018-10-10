<script>
/**
 * @overview 控制器
 *
 * @author huojinzhao
 */
export default {
  name: 'AppDirector',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },

    // 状态：播放 || 暂停
    isPlaying: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    forwardState() {
      return this.$store.forwardState;
    },

    backwardState() {
      return this.$store.backwardState;
    },

    sectionFlanks() {
      return this.$store.sectionFlanks;
    },

    theme() {
      return this.$store.theme.director;
    },

    playerStyle() {
      const url =
        this.isPlaying
          ? this.theme.pause
          : this.theme.start;

      const visibility = this.disabled ? 'hidden' : 'visible';

      return {
        visibility,
        ...this.composeBtnBgImg(url),
      };
    },

    isBackwardDisabled() {
      const { step, section } = this.$store.state;

      return step === 0 && section === 'home';
    },

    isForwardDisabled() {
      const { state, steps } = this.$store;
      const isStepEnded = state.step >= steps.length - 1;
      const isSectionEnded = !this.sectionFlanks.forward;

      return isStepEnded && isSectionEnded;
    },
  },

  created() {
    this.$ws.on('directorControl', this.directorControlCallback);
  },

  destroyed() {
    this.$ws.off('directorControl', this.directorControlCallback);
  },

  methods: {
    composeBtnBgImg(url) {
      return {
        'background-image': `url(${url})`,
      };
    },

    backward() {
      if (this.isBackwardDisabled) return;

      this.$store.syncCurriculumState({ ...this.backwardState });
    },

    forward() {
      if (this.isForwardDisabled) return;

      this.$store.syncCurriculumState({ ...this.forwardState });
    },

    control() {
      if (this.disabled) return;

      const data = {
        isPlaying: !this.isPlaying,
        disabled: this.disabled,
      };

      this.$store.syncTeachGroupState(data, 'directorControl');
    },

    directorControlCallback({ data }) {
      this.$emit('control', data);
    },
  },
};
</script>

<template>
  <div class="app-director">
    <button
      v-director.backward="backward"
      :style="composeBtnBgImg(theme.backward)"
      :disabled="isBackwardDisabled"
      class="global-backdrop"
    />
    <button
      v-director.control="control"
      :style="playerStyle"
      class="global-backdrop"
    />
    <button
      v-director.forward="forward"
      :style="composeBtnBgImg(theme.forward)"
      :disabled="isForwardDisabled"
      class="global-backdrop"
    />
  </div>
</template>

<style lang="postcss">
.app-director {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 120px;
  padding-right: 250px;
}

.app-director > button {
  margin: 0 10px;
  height: 80px;
  width: 80px;
}
</style>
