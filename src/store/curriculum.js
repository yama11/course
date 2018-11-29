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

    sections: [
      'home',
      'warmup',
      'learn',
      'game',
      'summary',
      'celebrate',
    ],

    assets: {},

    theme: null,

    students: [],
  }),

  computed: {
    // 前后章节
    sectionFlanks() {
      const sections = this.sections
        .filter(key => this.assets[key].length);

      const index = sections.indexOf(this.state.section);

      return {
        forward: sections[index + 1],
        backward: sections[index - 1],
      };
    },

    // 当前section资源列表
    steps() {
      const { section } = this.state;

      return this.assets[section] || [];
    },

    // 当前使用资源
    currentAsset() {
      const { step } = this.state;
      const empty = {
        type: 'empty',
        scene: {
          background: '',
          foreground: '',
        },
      };

      return this.steps[step] || empty;
    },

    backwardState() {
      const isSectionStepHead = this.state.step <= 0;

      const section =
        isSectionStepHead
          ? this.sectionFlanks.backward
          : this.state.section;

      const step =
        isSectionStepHead
          ? this.assets[section].length - 1
          : this.state.step - 1;

      return { section, step };
    },

    forwardState() {
      const isSectionStepEnd =
        this.state.step >= this.steps.length - 1;

      const section =
        isSectionStepEnd
          ? this.sectionFlanks.forward
          : this.state.section;

      const step = isSectionStepEnd ? 0 : this.state.step + 1;

      return { section, step };
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
