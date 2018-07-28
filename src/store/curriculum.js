/**
 * @overview  课程事务
 *
 * @author  huojinzhao
 */

import course from '@/assets/course';
import theme from '@/assets/theme';

export default {

  data: () => ({
    state: {
      section: 'home',

      step: 0,

      interaction: null,
    },

    assets: null,

    theme: null,
  }),

  computed: {
    sectionAssets() {
      return this.assets ? this.assets[this.state.section] : [];
    },

    stepAssets() {
      return this.sectionAssets[this.state.step];
    },
  },

  created() {
    // 同步状态事件监听
    this.$ws.on('syncState', this.syncState);

    // 学生主动请求课程状态
    this.$ws.on(
      'requestCurriculumState',
      this.syncStudentCurriculumState,
    );

    this.curriculumInit();
  },

  methods: {
    // 初始化课程数据
    curriculumInit() {
      this.assets = course;
      this.theme = theme;
    },

    // 更新本地state
    syncState({ data }) {
      this.state = { ...this.state, ...data };
    },

    // 同步课程分组：老师、学管师、学生
    syncCurriculumState({
      section = 'home',
      step = 0,
      interaction = null,
    } = {}) {
      // 没有操作权限不能同步目标状态
      if (!this.isCommander) return;

      const data = { section, step, interaction };

      // 学管师没有控制课程组权限
      this.appInfo.role === 'teacher'
        ? this.wsBroadcast(data)
        : this.syncSelfState(data);
    },

    // 广播教学分组：老师、学管师
    syncTeachGroupState(data, eventType) {
      // 没有操作权限不能同步目标状态
      if (!this.isCommander) return;

      // 学管师没有控制课程组权限
      this.appInfo.role === 'teacher'
        ?
        this.wsBroadcast(
          data,
          this.teachGroupSymbol,
          eventType,
        )
        :
        this.syncSelfState(data, eventType);
    },

    // 学管师只能控制自己的状态
    syncSelfState(data, eventType = 'syncState') {
      this.wsCall(eventType, this.selfSymbol, data);
    },

    // 上课老师响应学生同步课程状态数据
    syncStudentCurriculumState({ data }) {
      this.wsCall(
        'returnCurriculumState',
        `student_H5_${data.id}`,
        { ...this.state },
      );
    },
  },
};
