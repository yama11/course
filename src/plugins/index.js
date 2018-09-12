import Http from 'enslaver-http';
import WS from 'enslaver-ws';
import { isAikaolaEnv, appInfo } from '@/utils';
import storeRegister from '@/store';
import audio from './audio';
import animate from './animate';

const wsInit = isAikaolaEnv
  ? {
    url: 'wss://gateway.aikaola.com',
    debug: false,
  }
  : {
    url: 'wss://gateway.caihonggou.com',
    debug: true,
  };

export default (Vue) => {
  Vue.prototype.$http = new Http();
  Vue.prototype.$ws = new WS(wsInit);
  Vue.prototype.$store = new Vue(storeRegister(appInfo));
  Vue.prototype.$audio = audio;
  Vue.prototype.$animate = animate;
};
