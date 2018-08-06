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

    sectionFlanks() {
      const sectionNames = Object.keys(this.$store.assets)
        .filter(key => this.$store.assets[key].length);

      const currentSection = this.$store.state.section;

      const index = sectionNames.indexOf(currentSection);

      return {
        forward: sectionNames[index + 1],
        backward: sectionNames[index - 1],
      };
    },

    isBackwardDisabled() {
      const { step, section } = this.$store.state;

      return step === 0 && section === 'home';
    },

    isForwardDisabled() {
      const { state, sectionAssets } = this.$store;
      const isStepEnded = state.step <= sectionAssets.length - 1;
      const isSectionEnded = !this.sectionFlanks.forward;

      return isStepEnded && isSectionEnded;
    },
  },

  methods: {
    composeBtnBgImg(url) {
      return {
        'background-image': `url(${url})`,
      };
    },

    backward() {
      if (this.isBackwardDisabled) return;

      const { state, assets } = this.$store;

      const isSectionStepHead = state.step <= 0;

      const section =
        isSectionStepHead
          ? this.sectionFlanks.backward
          : state.section;

      const step =
        isSectionStepHead
          ? assets[section].length - 1
          : state.step - 1;

      this.$store.syncCurriculumState({ section, step });
    },

    forward() {
      if (this.isForewardDisabled) return;

      const { state, sectionAssets } = this.$store;

      const isSectionStepEnd =
        state.step >= sectionAssets.length - 1;

      const section =
        isSectionStepEnd
          ? this.sectionFlanks.forward
          : state.section;

      const step = isSectionStepEnd ? 0 : state.step + 1;

      this.$store.syncCurriculumState({ section, step });
    },

    control() {
      if (this.disabled) return;

      const data = {
        isPlaying: !this.isPlaying,
        disabled: this.disabled,
      };

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
