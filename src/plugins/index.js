import { Socket, Http } from 'enslaver-browser';
import { isAikaolaEnv, appInfo } from '@/utils';
import storeRegister from '@/store';
import audio from './audio';
import animate from './animate';

const wsInit = isAikaolaEnv
  ? {
    source: 'wss://gateway.aikaola.com',
  }
  : {
    source: 'wss://gateway.caihonggou.com',
  };

export default (Vue) => {
  Vue.prototype.$http = new Http();
  Vue.prototype.$ws = new Socket(wsInit);
  Vue.prototype.$store = new Vue(storeRegister(appInfo));
  Vue.prototype.$audio = audio;
  Vue.prototype.$animate = animate;
};
