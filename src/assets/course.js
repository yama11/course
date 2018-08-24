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
        index: 'K1-119',
        // 课时标题
        title: 'Family',
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
        video: './course/television/kids.mp4',
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
      // 模式一，一张卡片多个文字，卡片和文字都是可选
      src: {
        card: './course/teaching02/sister.png',

        texts: ['sister'],
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
        card: './course/teaching02/brother.png',

        texts: ['brother'],
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
        card: './course/teaching02/mom.png',

        texts: ['mom'],
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
        card: './course/teaching02/dad.png',

        texts: ['dad'],
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
            url: './course/teaching02/sister.png',
            text: 'sister',
          },
          {
            url: './course/teaching02/brother.png',
            text: 'brother',
          },
          {
            url: './course/teaching02/mom.png',
            text: 'mom',
          },
          {
            url: './course/teaching02/dad.png',
            text: 'dad',
          },
        ],
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
        card: './course/teaching02/mom.png',

        texts: [
          "Who's she?",
          "She's my mom.",
        ],
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
        card: './course/teaching02/dad.png',

        texts: [
          "Who's he?",
          "He's my dad.",
        ],
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
        card: './course/teaching02/brother.png',

        texts: [
          "Who's he?",
          "He's my brother.",
        ],
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
        card: './course/teaching02/sister.png',

        texts: [
          "Who's she?",
          "She's my sister.",
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
            url: './course/teaching02/mom.png',
            text: 'mom',
          },
          {
            url: './course/teaching02/dad.png',
            text: 'dad',
          },
          {
            url: './course/teaching02/brother.png',
            text: 'brother',
          },
          {
            url: './course/teaching02/sister.png',
            text: 'sister',
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
          url: './course/teaching02/mom.png',
        },
        // 题目
        topic: [
          './course/card02/disturb/boy.png',
          './course/card02/disturb/limao.png',
          './course/card02/disturb/hello.png',
        ],
        // 选项
        options: [
          './course/card02/disturb/mittens.png',
          './course/card02/disturb/girl.png',
          './course/card02/disturb/friend.png',
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
          select: 'C',
          url: './course/teaching02/dad.png',
        },
        // 题目
        topic: [
          './course/card02/disturb/boy.png',
          './course/card02/disturb/hat.png',
          './course/card02/disturb/hello.png',
        ],
        // 选项
        options: [
          './course/card02/disturb/girl.png',
          './course/card02/disturb/siyecao.png',
          './course/card02/disturb/friend.png',
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
          select: 'D',
          url: './course/teaching02/sister.png',
        },
        // 题目
        topic: [
          './course/card02/disturb/girl.png',
          './course/card02/disturb/hello.png',
          './course/card02/disturb/yinliao.png',
        ],
        // 选项
        options: [
          './course/card02/disturb/boy.png',
          './course/card02/disturb/mittens.png',
          './course/card02/disturb/hat.png',
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
          url: './course/teaching02/brother.png',
        },
        // 题目
        topic: [
          './course/card02/disturb/boy.png',
          './course/card02/disturb/friend.png',
          './course/card02/disturb/siyecao.png',
        ],
        // 选项
        options: [
          './course/card02/disturb/girl.png',
          './course/card02/disturb/hat.png',
          './course/card02/disturb/hello.png',
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
          url: './course/teaching02/mom.png',
          text: 'mom',
        },
        topic: {
          audio: './course/card03/mom.mp3',
        },
        options: [
          {
            url: './course/teaching02/dad.png',
            text: 'dad',
          },
          {
            url: './course/teaching02/brother.png',
            text: 'brother',
          },
          {
            url: './course/teaching02/sister.png',
            text: 'sister',
          },
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
          select: 'B',
          url: './course/teaching02/sister.png',
          text: 'sister',
        },
        topic: {
          audio: './course/card03/sister.mp3',
        },
        options: [
          {
            url: './course/teaching02/mom.png',
            text: 'mom',
          },
          {
            url: './course/teaching02/dad.png',
            text: 'dad',
          },
          {
            url: './course/teaching02/brother.png',
            text: 'brother',
          },
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
          select: 'A',
          url: './course/teaching02/brother.png',
          text: 'brother',
        },
        topic: {
          audio: './course/card03/brother.mp3',
        },
        options: [
          {
            url: './course/teaching02/mom.png',
            text: 'mom',
          },
          {
            url: './course/teaching02/sister.png',
            text: 'sister',
          },
          {
            url: './course/teaching02/dad.png',
            text: 'dad',
          },
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
          url: './course/teaching02/dad.png',
          text: 'dad',
        },
        topic: {
          audio: './course/card03/dad.mp3',
        },
        options: [
          {
            url: './course/teaching02/brother.png',
            text: 'brother',
          },
          {
            url: './course/teaching02/sister.png',
            text: 'sister',
          },
          {
            url: './course/teaching02/mom.png',
            text: 'mom',
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
          url: './course/teaching02/mom.png',
        },
        topic: [
          './course/card04/mom1.png',
        ],
        options: [
          {
            url: './course/teaching02/brother.png',
          },
          {
            url: './course/teaching02/dad.png',
          },
          {
            url: './course/teaching02/sister.png',
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
          select: 'B',
          url: './course/teaching02/dad.png',
        },
        topic: [
          './course/card04/dad1.png',
        ],
        options: [
          {
            url: './course/teaching02/brother.png',
          },
          {
            url: './course/teaching02/sister.png',
          },
          {
            url: './course/teaching02/mom.png',
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
          select: 'A',
          url: './course/teaching02/sister.png',
        },
        topic: [
          './course/card04/sister1.png',
        ],
        options: [
          {
            url: './course/teaching02/brother.png',
          },
          {
            url: './course/teaching02/dad.png',
          },
          {
            url: './course/teaching02/mom.png',
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
          select: 'B',
          url: './course/teaching02/brother.png',
        },
        topic: [
          './course/card04/brother1.png',
        ],
        options: [
          {
            url: './course/teaching02/sister.png',
          },
          {
            url: './course/teaching02/dad.png',
          },
          {
            url: './course/teaching02/mom.png',
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
          select: 'B',
          url: './course/teaching02/dad.png',
        },
        topic: [
          './course/card04/dad.png',
        ],
        options: [
          {
            url: './course/teaching02/brother.png',
          },
          {
            url: './course/teaching02/sister.png',
          },
          {
            url: './course/teaching02/mom.png',
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
          url: './course/teaching02/brother.png',
        },
        topic: [
          './course/card04/brother.png',
        ],
        options: [
          {
            url: './course/teaching02/mom.png',
          },
          {
            url: './course/teaching02/dad.png',
          },
          {
            url: './course/teaching02/sister.png',
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
          select: 'C',
          url: './course/teaching02/mom.png',
        },
        topic: [
          './course/card04/mom.png',
        ],
        options: [
          {
            url: './course/teaching02/brother.png',
          },
          {
            url: './course/teaching02/sister.png',
          },
          {
            url: './course/teaching02/dad.png',
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
          select: 'B',
          url: './course/teaching02/sister.png',
        },
        topic: [
          './course/card04/sister.png',
        ],
        options: [
          {
            url: './course/teaching02/brother.png',
          },
          {
            url: './course/teaching02/dad.png',
          },
          {
            url: './course/teaching02/mom.png',
          },
        ],
      },
    },
  ],
  summary: [
    {
      type: 'teaching',
      mode: 1,
      scene: {
        background: './course/teaching01/background.png',
        foreground: '',
      },
      // 模式一，一张卡片多个文字，卡片和文字都是可选
      src: {
        card: './course/teaching02/dad.png',

        texts: ['dad'],
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
        card: './course/teaching02/dad.png',

        texts: [
          "Who's he?",
          "He's my dad.",
        ],
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
        card: './course/teaching02/mom.png',

        texts: ['mom'],
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
        card: './course/teaching02/mom.png',

        texts: [
          "Who's she?",
          "She's my mom.",
        ],
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
        card: './course/teaching02/brother.png',

        texts: ['brother'],
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
        card: './course/teaching02/brother.png',

        texts: [
          "Who's he?",
          "He's my brother.",
        ],
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
        card: './course/teaching02/sister.png',

        texts: ['sister'],
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
        card: './course/teaching02/sister.png',

        texts: [
          "Who's she?",
          "She's my sister.",
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

