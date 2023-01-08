
import { generateFilePath } from '@nextcloud/router'

import Vue from 'vue'
import App from './App.vue'
// import router from './router'

// eslint-disable-next-line
__webpack_public_path__ = generateFilePath(appName, '', 'js/')

// bind to window
Vue.mixin({ methods: { t, n } })
//Vue.prototype.t = t
////Vue.prototype.n = n
// Vue.prototype.OC = OC
// Vue.prototype.OCA = OCA
// eslint-disable-next-line camelcase
// Vue.prototype.oc_userconfig = oc_userconfig

export default new Vue({
	el: '#content',
	render: h => h(App),
})
