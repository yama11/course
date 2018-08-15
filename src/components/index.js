import AppBackgroundCard from './AppBackgroundCard';
import AppDirector from './AppDirector';
import AppGround from './AppGround';
import AppRank from './AppRank';
import AppScene from './AppScene';
import TheMenu from './TheMenu';

const components = {
  AppBackgroundCard,
  AppDirector,
  AppGround,
  AppRank,
  AppScene,
  TheMenu,
};

export default (Vue) => {
  Object.keys(components)
    .forEach(key => Vue.component(key, components[key]));
};
