import AppScene from './AppScene';
import AppGround from './AppGround';
import TheDirector from './TheDirector';
import TheMenu from './TheMenu';

const components = {
  AppScene,
  AppGround,
  TheDirector,
  TheMenu,
};

export default (Vue) => {
  Object.keys(components)
    .forEach(key => Vue.component(key, components[key]));
};
