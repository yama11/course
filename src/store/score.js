/**
 * @overview  积分事务
 *
 * @author  huojinzhao
 */

export default {
  data: () => ({
    // 学生积分统计
    statistic: {
      // 总分统计
      total_score_rank: [],
      // 类型游戏总分统计
      game_type_score_rank: [],
      // 单个游戏分数统计
      game_score_rank: [],
    },
  }),

  computed: {
    // game环节总排名 learn环节
    practiceScoreList() {
      return this.state.section === 'game'
        ? this.statistic.game_type_score_rank
        : this.statistic.game_score_rank;
    },
  },

  created() {
    // 后端推送学生积分更新
    this.$ws.on('game_score_rank', this.updateStatistic);

    // 前端更新学生统计数据
    this.$on('updateStatistic', this.updateStatistic);
  },

  methods: {
    // 更新积分统计
    updateStatistic({ data }) {
      const statistic = data ? JSON.parse(data) : null;

      this.statistic = statistic
        ?
        {
          ...this.statistic,
          ...statistic,
        }
        :
        {
          ...this.statistic,
          game_score_rank: [],
          game_type_score_rank: [],
        };
    },
  },
};
