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
  }),

  computed: {
    isCommander() {
      const { role, controls } = this.appInfo;

      return role === 'teacher' || controls === 'all';
    },

    roleAPI() {
      return this.appInfo.role === 'teacher'
        ? this.constructAPI('final-liveroom-api')
        : this.constructAPI('final-classroom-api');
    },
  },

  methods: {
    constructAPI(prefix) {
      const domain = isAikaolaEnv
        ? 'aikaola.com'
        : 'caihonggou.com';

      return `https://${prefix}.${domain}`;
    },
  },
});

export default store;
