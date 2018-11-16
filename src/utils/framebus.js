/**
 * @overview  基础构造
 */
export class ImkidFrameBus {
  target = null

  constructor(target) {
    this.target = target;
  }

  postMessage(type, payload) {
    this.target.postMessage({ type, payload }, '*');
  }

  static addMessageListener(targetType, handler, once) {
    function callback(event) {
      const { data: { type, payload } } = event;

      type === targetType && handler(payload);
    }

    return ImkidFrameBus.mountListener(callback, once);
  }

  static mountListener(cb, once = false) {
    window.addEventListener('message', cb);

    const unmount = () => ImkidFrameBus.unmountListener(cb);

    return once
      ? ImkidFrameBus.unmountListener(cb)
      : { unmount };
  }

  static unmountListener(cb) {
    window.removeEventListener('message', cb);

    return null;
  }
}

/**
 * @overview  主机构造函数
 */
// 接收从机游戏环节信息 gameAction
// 接收从机信息 guestAction
export class ImkidGameHost extends ImkidFrameBus {
  constructor({
    guest = window,
    // 玩家数据结构
    players = [],
    // 练习数据结构
    game = { name: '', list: [] },
  }) {
    super(guest);

    this.players = players;
    this.game = game;

    ImkidGameHost.addMessageListener(
      'requestPlayers', this.postPlayers,
    );

    ImkidGameHost.addMessageListener(
      'requestGame', this.postGame,
    );
  }

  postPlayers(players = this.players) {
    this.postMessage('responsePlayers', players);
  }

  postGame(game = this.game) {
    this.postMessage('responseGame', game);
  }

  postPlayer(play) {
    this.postMessage('playerAction', play);
  }
}

/**
 * @overview  从机构造函数
 */
export class ImkidGameGuest extends ImkidFrameBus {
  constructor(host = window.parent) {
    super(host);
  }

  /**
   * @overview  获取玩家列表
   */
  getPlayers(callback) {
    ImkidGameGuest.addMessageListener(
      'reponsePlayers', callback, true,
    );

    this.postMessage('requestPlayers');
  }

  /**
   * @overview  获取题目列表
   */
  getGame(callback) {
    ImkidGameGuest.addMessageListener(
      'reponseGame', callback, true,
    );

    this.postMessage('requestGame');
  }

  /**
   * @overview  通知主机每小节的开始或者结束
   *
   * @param   {object}    data
   * @param   {string}    data.tag      'start': 开始 | 'over': 结束 | 'pause': 暂停
   * @param   {string}    data.name     游戏名称
   * @param   {number}    data.index    第几节
   */
  postGameAction(data) {
    this.postMessage('gameAction', data);
  }

  /**
   * @overview  通知主机cocos的开始或者结束
   *
   * @param   {object}    data
   * @param   {boolean}   data.tag      'start': 开始 | 'over': 结束 | 'pause': 暂停
   * @param   {string}    data.name     游戏名称
   */
  postGuestAction(data) {
    this.postMessage('guestAction', data);
  }
}
