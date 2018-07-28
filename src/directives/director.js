/**
 * @overview 键盘事件指令
 */

const keyboard = {
  control: [9, 13, 63],
  forward: [37, 38],
  backward: [39, 40],
};

const handlerMap = new Map();

export default {
  bind(el, { value: eventHandler, modifiers }) {
    el.addEventListener('click', eventHandler);

    const handler = (evt) => {
      const keys = Object.keys(modifiers)
        .filter(keyName => modifiers[keyName])
        .reduce((acc, keyName) => [...acc, ...keyboard[keyName]], []);

      const isEffective = keys.includes(evt.keyCode);

      isEffective && eventHandler(evt);
    };

    handlerMap.set(el, handler);

    document.addEventListener('keydown', handler);
  },

  unbind: (el, { value: eventHandler }) => {
    el.removeEventListener('click', eventHandler);

    document.removeEventListener('keydown', handlerMap.get(el));

    handlerMap.delete(el);
  },
}
;
