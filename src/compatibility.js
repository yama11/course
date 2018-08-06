import 'core-js/fn/array/includes';
import 'core-js/fn/promise/finally';

window.equipmentCallback = (payload) => {
  const data = typeof payload === 'string'
    ? JSON.parse(payload) : payload;

  const evt = new CustomEvent('equipmentCallback', { detail: data });

  window.dispatchEvent(evt);
};
