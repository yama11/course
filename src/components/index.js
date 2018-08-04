import AppScene from './AppScene';
import AppGround from './AppGround';
import AppDirector from './AppDirector';
import TheMenu from './TheMenu';

const components = {
  AppScene,
  AppGround,
  AppDirector,
  TheMenu,
};

export default (Vue) => {
  Object.keys(components)
    .forEach(key => Vue.component(key, components[key]));
};
