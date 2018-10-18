<script>
/**
 * @overview 打怪兽 - 怪兽眩晕
 *
 * @author huojinzhao
 */

export default {
  name: 'PracticeMonsterSwirl',

  data: () => ({
    index: 0,

    list: [
      './practice/monster/swirl1.png',
      './practice/monster/swirl2.png',
      './practice/monster/swirl3.png',
    ],
  }),

  created() {
    this.animate();
  },

  methods: {
    delay(ms = 60) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },

    animate() {
      this.index = (this.index + 1) % 3;

      this.delay(150).then(this.animate);
    },
  },
};
</script>

<template>
  <img
    :src="list[index]"
    class="practice-monster__swirl"
  >
</template>

<style lang="postcss">
.practice-monster__swirl {
  position: fixed;
  top: 218px;
  left: 771px;
  height: 160px;
  width: 300px;
}
</style>
