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
    this.audio.src = src;
  }

  load(src = this.audio.src) {
    this.pause();
    this.audio.src = src;

    return this;
  }

  play(src) {
    this.load(src);
    this.audio.play();

    return this;
  }

  echo({ src, callback } = {}) {
    this.audio.onended = callback;

    return this.play(src);
  }

  pause() {
    this.audio.pause();

    return this;
  }
}
