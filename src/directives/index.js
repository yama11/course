import director from './director';

const directives = {
  director,
};

export default (Vue) => {
  Object.keys(directives)
    .forEach(name => Vue.directive(name, directives[name]));
};
