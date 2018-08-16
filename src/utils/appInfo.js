/**
 * @overview  页面启动初始化
 *
 * @author    huojinzhao
 */

import { decodeQuery, decodeHash } from 'enslaver-uri';
import { nativeGetAppInfo } from './native';

const hrefInfo =
  decodeQuery(window.location.search);

const randomNum =
  Number(((Math.random() + 9) * (10 ** 10)).toFixed(0));

const devInfo =
  hrefInfo.role === 'teacher'
    ?
    {
      id: 99,
      class_id: 1,
      schedule_id: 247,
      role: 'teacher',
    }
    :
    {
      id: randomNum,
      class_id: randomNum,
      schedule_id: randomNum,
      role: 'manager',
    };

const appInfo =
  typeof nativeGetAppInfo() === 'string'
    ? JSON.parse(nativeGetAppInfo())
    : nativeGetAppInfo();

const prodInfo = appInfo || devInfo;

export default {
  token: decodeHash(window.location.hash),
  ...prodInfo,
  ...hrefInfo,
};

export const isAikaolaEnv =
  window.location.search.includes('env=aikaola');
