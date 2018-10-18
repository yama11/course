/**
 * @overview  积分事务
 *
 * @author  huojinzhao
 */

export default {
  data() {
    return {
      score: this.scoreInit(),

      parctice_score: [],
    };
  },

  created() {
    // 后端推送积分数据
    this.$ws.on('game_score_rank', this.scoreUpdate);

    // 前端更新积分数据
    this.$on('scoreUpdate', this.scoreUpdate);
  },

  methods: {
    // 初始化积分数据
    scoreInit() {
      return {
        // 练习类型
        game_type: '',
        // 练习名称
        game_name: '',
        // 总分统计
        total_score_rank: [],
        // 类型游戏总分统计
        game_type_score_rank: [],
        // 单个游戏分数统计
        game_score_rank: [],
      };
    },

    // 更新积分数据
    scoreUpdate({ data }) {
      const score = data ? JSON.parse(data) : null;

      this.score = score || this.scoreInit();
    },

    // 更新 parctice 类型游戏的排名
    parcticeScore(info) {
      const indexExit = this.parctice_score
        .findIndex(item => item.id === info.id);

      indexExit === -1
        ? this.parctice_score.push({
          name: info.name,
          id: info.id,
          score: 1,
        })
        : this.parctice_score[indexExit].score += 1;
    },
  },
};
