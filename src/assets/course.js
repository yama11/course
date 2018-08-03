/**
 * 主题资源模拟数据
 */

export default {
  home: [
    {
      type: 'concert',
      scene: {
        background: './theme/scene-background.png',
        foreground: './theme/scene-foreground.png',
      },
      src: {
        audio: [
          './course/home/music.mp3',
        ],
      },
    },
  ],
  warmup: [
    {
      type: 'flashcard',
      mode: 1,
      scene: {
        background: './course/card01/background.png',
        foreground: '',
      },
      src: {
        cards: [
          {
            url: './course/card01/red.png',
            text: 'red',
          },
          {
            url: './course/card01/yellow.png',
            text: 'yellow',
          },
          {
            url: './course/card01/labi.png',
            text: 'labi',
          },
          {
            url: './course/card01/apple.png',
            text: 'apple',
          },
        ],
      },
    },
  ],
  learn: [],
  game: [],
  summary: [],
  celebrate: [],
};

