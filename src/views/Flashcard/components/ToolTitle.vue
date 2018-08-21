<script>
/**
 * @overview 文本提示
 *
 * @author suyanping
 */

export default {
  name: 'ToolTitle',

  props: {
    title: {
      type: String,
      default: '',
    },
  },

  data() {
    return {

    };
  },

  methods: {

  },

};
</script>

<template>
  <div
    class="tool-title">
    {{ title }}
  </div>
</template>

<style lang="postcss">
.tool-title{
  position: absolute;
  background: white;
  padding: 20px 100px;
  font-size: 45px;
  border-radius: 20px;
  left: 750px;
}
</style>
