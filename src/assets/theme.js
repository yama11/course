/**
 * 主题主题模拟数据
 */

export default {
  menu: {
    home: {
      icon: './theme/menu-icon-home.png',
      title: './theme/menu-title-home.png',
    },
    warmup: {
      icon: './theme/menu-icon-warmup.png',
      title: './theme/menu-title-warmup.png',
    },
    learn: {
      icon: './theme/menu-icon-learn.png',
      title: './theme/menu-title-learn.png',
    },
    game: {
      icon: './theme/menu-icon-game.png',
      title: './theme/menu-title-game.png',
    },
    summary: {
      icon: './theme/menu-icon-summary.png',
      title: './theme/menu-title-summary.png',
    },
    celebrate: {
      icon: './theme/menu-icon-celebrate.png',
      title: './theme/menu-title-celebrate.png',
    },
  },

  director: {
    backward: './theme/director-backward.png',
    forward: './theme/director-forward.png',
    pause: './theme/director-pause.png',
    start: './theme/director-start.png',
  },

  scene: {
    home: {
      foreground: './theme/scene-foreground.png',
      background: './theme/scene-background.png',
    },
    warmup: {
      background: './course/television/background.png',
      foreground: '',
    },
    learn: {
      foreground: '',
      background: '',
    },
    game: {
      foreground: '',
      background: './theme/card-background.png',
    },
    summary: {
      foreground: '',
      background: '',
    },
    celebrate: {
      foreground: '',
      background: './theme/celebrate-background.png',
    },
  },

  card: {
    front: './theme/card-front.png',
    reverse: './theme/card-reverse.png',
  },

  student: {
    avatar: './theme/student-avatar.png',
  },

  rank: {
    practice: {
      panel: './theme/rank-panel.png',
      groove: './theme/rank-groove.png',
    },
    celebrate: {
      panel: '',
      groove: './theme/celebrate-groove.png',
    },
  },
};
