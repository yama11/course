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
  background: rgba(0,0,0,0.3);
  color: white;
  padding: 20px 100px;
  font-size: 45px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  left: 750px;
}
</style>
