/**
 * @overview  全局数据管理
 *
 * @author    huojinzhao
 */

import { isAikaolaEnv } from '@/utils';
import wsBiz from './wsBiz';
import curriculum from './curriculum';
import score from './score';

const store = bootInfo => ({

  mixins: [wsBiz, curriculum, score],

  data: () => ({
    // 应用信息
    appInfo: { ...bootInfo },

    apiHostPrefix: {
      aikaola: 'https://oa-v2-double',
      caihonggou: 'https://oa-v2-double',
      development: 'https://dev-oa-double',
    },
  }),

  computed: {
    isCommander() {
      const { role, controls } = this.appInfo;

      return role === 'teacher' || controls === 'all';
    },

    roleAPI() {
      return this.appInfo.role === 'teacher'
        ? this.constructAPI('live-api', 'teacher')
        : this.constructAPI('blackboard-api', 'manager');
    },
  },

  methods: {
    constructAPI(prefix, postfix, version = 'v1') {
      const { env = 'caihonggou' } = this.appInfo;

      const domain = isAikaolaEnv
        ? 'aikaola.com'
        : 'caihonggou.com';

      const host = `${this.apiHostPrefix[env]}-${prefix}.${domain}/${version}`;

      return `${host}/${postfix}`;
    },
  },
});

export default store;
