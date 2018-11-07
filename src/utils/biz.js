/**
 * @overview 综合事务
 */

export function createOptions(
  content,
  answer = 'A',
  options = [],
) {
  const list = [...options];

  const selectIndex = ['A', 'B', 'C', 'D'];

  return Array(options.length + 1).fill(null)
    .map((item, index) => {
      const select = selectIndex[index];

      const url = answer === select ? content : list.pop();

      return { select, url };
    });
}

export class AudioPlayer {
  constructor(src = '') {
    this.audio = new Audio();
    this.src = src;
  }

  load(src = this.src) {
    this.pause();
    this.src = src;

    return this;
  }

  play(src) {
    this.load(src);

    this.audio.play();

    return this;
  }

  pause() {
    this.audio.pause();

    return this;
  }
}
