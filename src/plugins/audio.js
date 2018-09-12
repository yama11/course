const audio = new Audio();

const assetsList = [
  './audio/10085.mp3',
  './audio/10534.mp3',
  './audio/10553.mp3',
  './audio/10557.mp3',
];

export default {
  settle() {
    return [...assetsList];
  },

  random() {
    const list = this.settle();

    return list.sort(() => Math.random() - 0.5);
  },

  play(url = this.random()[0]) {
    audio.src = url;
    audio.play();
  },
};
