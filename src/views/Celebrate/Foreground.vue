<script>
/**
 * @overview 结算页 - 后景
 *
 * @author huojinzhao
 */

export default {
  name: 'CelebrateForeground',

  data: () => ({
    director: {
      disabled: true,
    },

    students: [],
  }),

  computed: {
    theme() {
      return this.$store.theme.rank;
    },
  },

  created() {
    this.fetchStudentsScore();
  },

  methods: {
    fetchStudentsScore() {
      const {
        curriculum_id,
        schedule_id,
        class_id,
        role,
      } = this.$store.appInfo;

      const uri = role === 'teacher'
        ? `/game_score/rank/${curriculum_id}/${schedule_id}`
        : `/game_score/rank/${curriculum_id}/${schedule_id}/${class_id}`;

      this.$http.get(`${this.$store.roleAPI}${uri}`)
        .then((data) => {
          if (data) this.students = data;
        })
        .catch((err) => {
          // eslint-disable-next-line
          console.warn('签到人数请求错误信息', err);
        });
    },
  },
};
</script>

<template>
  <div class="concert-foreground">
    <AppRank
      :list="students"
      :groove="theme.celebrate.groove"
    />
    <AppDirector
      :disabled = "director.disabled"
    />
  </div>
</template>

<style lang="postcss">
.concert-foreground {

}
</style>
