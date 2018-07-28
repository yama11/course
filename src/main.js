import Vue from 'vue';
import componentsRegister from '@/components';
import directivesRegister from '@/directives';
import pluginsRegister from '@/plugins';
import '@/style/index.css';
import './compatibility';
import App from './App';

Vue.use(componentsRegister)
  .use(directivesRegister)
  .use(pluginsRegister);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
