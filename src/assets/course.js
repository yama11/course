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
      type: 'television',
      scene: {
        background: './course/television/background.png',
        foreground: '',
      },
      src: {
        video: './course/television/video.mp4',
      },
    },
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
            url: './course/teaching01/red.png',
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
    {
      type: 'flashcard',
      mode: 2,
      scene: {
        background: './course/card01/background.png',
        foreground: '',
      },
      src: {
        answer: {
          select: 'B',
          url: './course/card02/select/apple.png',
        },
        topic: [
          './course/card02/disturb/limao.png',
          './course/card02/disturb/siyecao.png',
          './course/card02/disturb/yinliao.png',
        ],
        options: [
          './course/card02/select/red.png',
          './course/card02/select/yellow.png',
          './course/card02/select/labi.png',
        ],
      },
    },
  ],
  learn: [
    {
      type: 'teaching',
      mode: 1,
      scene: {
        background: './course/teaching01/background.png',
        foreground: '',
      },
      src: {
        card: './course/teaching01/red.png',

        texts: [
          'hello',
          'What color is it hai hai hai hai?',
          'It is red.',
        ],
      },
    },
    {
      type: 'teaching',
      mode: 2,
      scene: {
        background: './course/teaching02/background.png',
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
        ],
      },
    },
  ],
  game: [],
  summary: [],
  celebrate: [],
};

