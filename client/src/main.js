// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import store from '@/store/store';
import App from './App'
import router from './router'
import Panel from '@/components/globals/Panel';

import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false

Vue.use(Vuetify,
  {
    theme: {
      primary: '#F44336',
      secondary: '#2196F3',
      accent: '#607d8b',
      error: '#f44336',
      warning: '#ffeb3b',
      info: '#2196f3',
      success: '#4caf50',
    },
  });

Vue.component('Panel', Panel);
sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
