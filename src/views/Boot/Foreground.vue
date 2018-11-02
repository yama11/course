<script>
/**
 * @overview 启动页 - 前景
 *
 * @author huojinzhao
 */

export default {
  name: 'BootForeground',

  props: {
    src: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    director: {
      disabled: true,
    },
  }),
};
</script>

<template>
  <div class="boot-foreground">
    <div class="boot-foreground__title">
      <span class="boot-foreground__title--index">
        {{ src.index }}
      </span>
      <span class="boot-foreground__title--content">
        {{ src.title }}
      </span>
    </div>

    <AppDirector :disabled = "director.disabled" />
  </div>

</template>

<style lang="postcss">
.boot-foreground__title {
  position: fixed;
  display: flex;
  flex-flow: column;
  top: 535px;
  left: 230px;
  width: 200px;
  height: 120px;
}

.boot-foreground__title--index {
  font-size: 40px;
  font-weight: bolder;
  color: #fff;
  font-style: italic;
}

.boot-foreground__title--content {
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  font-style: italic;
}
</style>
