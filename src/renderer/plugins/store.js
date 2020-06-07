import LocalStorage from 'localstorage'
const { version } = require('../../../package.json')
const store = new LocalStorage(`scrcpy@${version}`)

export default {
	install(Vue) {
		Vue.prototype.$store = {
			put(key, value) {
				store.put(key, value)
			},
			get(key) {
				const [err, value] = store.get(key)
				if (err) {
					return null
				}
				return value
			},
			has(key) {
				const [err, had] = store.has(key)
				if (err) {
					return false
				}
				return had
			},
			delete(key) {
				const [err, deleted] = store.delete(key)
				if (err) {
					return false
				}
				return deleted
			},
			clear() {
				store.delete()
			}
		}
	}
}
