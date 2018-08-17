/**
 * 主题资源模拟数据
 */

export default {
  home: [
    {
      // 类型：启动环节
      type: 'boot',
      // 场景数据：启动页场景来自主题数据
      scene: {
        background: './theme/scene-background.png',
        foreground: './theme/scene-foreground.png',
      },
      src: {
        // 课件课序
        index: 'PK-1',
        // 课时标题
        title: 'Letter Aa,Bb',
      },
    },
  ],
  warmup: [
    {
      // 类型：视频环节
      type: 'television',
      scene: {
        background: './course/television/background.png',
        foreground: '',
      },
      src: {
        video: './course/television/video.mp4',
      },
    },
  ],
  learn: [
    {
      // 教学场景，目前有两种模式
      type: 'teaching',
      mode: 1,
      scene: {
        background: './course/teaching01/background.png',
        foreground: '',
      },
      // 模式一，一张卡片多个文字，卡片和文字都是可选
      src: {
        card: './course/teaching01/red.png',

        texts: [],
      },
    },
    {
      type: 'teaching',
      mode: 1,
      scene: {
        background: './course/teaching01/background.png',
        foreground: '',
      },
      // 模式一，一张卡片多个文字，卡片和文字都是可选
      src: {
        card: '',

        texts: [
          'apple',
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
      // 模式二，卡片文字一对一
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
  game: [
    {
      // 类型：闪卡环节，目前有四种模式
      type: 'flashcard',
      // 模式一
      mode: 1,
      scene: {
        background: './course/card01/background.png',
        foreground: '',
      },
      // 模式一：四张有可带文字的卡牌按照投票排名顺序翻转
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
      // 模式二：随机生成三张题目干扰项卡牌和选项干扰项卡牌
      src: {
        // 正确答案
        answer: {
          select: 'B',
          url: './course/card02/select/apple.png',
        },
        // 题目
        topic: [
          './course/card02/disturb/limao.png',
          './course/card02/disturb/siyecao.png',
          './course/card02/disturb/yinliao.png',
        ],
        // 选项
        options: [
          './course/card02/select/red.png',
          './course/card02/select/yellow.png',
          './course/card02/select/labi.png',
        ],
      },
    },
    {
      type: 'flashcard',
      mode: 3,
      scene: {
        background: './course/card01/background.png',
        foreground: '',
      },
      // 模式三：根据播放的音乐选择对应的正确卡牌
      src: {
        answer: {
          select: 'C',
          url: './course/card02/select/apple.png',
          text: 'apple',
        },
        topic: {
          audio: './course/home/music.mp3',
        },
        options: [
          {
            url: './course/card02/select/labi.png',
            text: 'red',
          },
          {
            url: './course/card02/select/yellow.png',
            text: 'yellow',
          },
          {
            url: './course/card02/disturb/siyecao.png',
            text: 'labi',
          },
        ],
      },
    },
    {
      type: 'flashcard',
      mode: 4,
      scene: {
        background: './course/card01/background.png',
        foreground: '',
      },
      // 模式四：题目是一张自定义图片，根据图片选择选项
      src: {
        answer: {
          select: 'D',
          url: './course/card02/select/apple.png',
          text: 'apple',
        },
        topic: [
          './course/card02/select/apple.png',
        ],
        options: [
          {
            url: './course/card02/select/labi.png',
            text: 'red',
          },
          {
            url: './course/card02/select/yellow.png',
            text: 'yellow',
          },
          {
            url: './course/card02/disturb/siyecao.png',
            text: 'labi',
          },
        ],
      },
    },
  ],
  summary: [
    {
      // 教学场景，目前有两种模式
      type: 'teaching',
      mode: 1,
      scene: {
        background: './course/teaching01/background.png',
        foreground: '',
      },
      // 模式一，一张卡片多个文字，卡片和文字都是可选
      src: {
        card: './course/teaching01/red.png',

        texts: [
          "What's this?",
          'It is an apple.',
          'What color is it?',
          'It is red.',
        ],
      },
    },
  ],
  celebrate: [
    {
      // 结算环节
      type: 'celebrate',
      // 来自主题数据
      scene: {
        background: './theme/celebrate-background.png',
        foreground: '',
      },
    },
  ],
};

