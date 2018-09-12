const animationList = [
  'animated bounceInLeft',
  'animated bounceInDown',
  'animated bounceInUp',
  'animated bounceInRight',
];

export default {
  // 生成随机动效列表
  random(delay) {
    const list = this.settle(delay);

    return list.sort(() => Math.random() - 0.5);
  },

  // 初始固定动效列表，或取得某个固定动效
  // delay单位毫秒，目前仅支持500ms和1000ms
  settle(delay) {
    const time = Math.ceil(delay);

    return time
      ? animationList.map((item, index) => `${item} delay-${time * index}`)
      : [...animationList];
  },
};
