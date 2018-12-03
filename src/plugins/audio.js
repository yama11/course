import { AudioPlayer } from '@/utils';

const audio = new AudioPlayer();

const assetsList = [
  './audio/10085.mp3',
  './audio/10086.mp3',
  './audio/10087.mp3',
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
    audio.load(url);

    audio.play();
  },

  pause() {
    audio.pause();
  },
};
