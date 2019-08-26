import { shell } from 'electron'

export default {
	install(Vue) {
		Vue.prototype.$openExternal = function (url) {
			shell.openExternal(url)
		}
	}
}
