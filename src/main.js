import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics';
import 'microns/fonts/microns.css';

import { domain, clientId } from "./auth_config.json";

import { Auth0Plugin } from "./auth";

Vue.use(VueAnalytics, {
  id: 'UA-12345678-1',
  router
});

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
