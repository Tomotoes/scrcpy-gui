import { Notification } from 'element-ui'
const config = {
	dangerouslyUseHTMLString: true,
	customClass: 'custom-notice',
	showClose: true
}

export default {
	install(Vue) {
		Vue.prototype.$notify = ['info', 'success', 'warning', 'error'].reduce((notice, type) => {
			notice[type] = (message, duration = 1000, position = 'top-right', offset = 58) => {
				return Promise.resolve(Notification({
					message,
					type,
					position,
					offset,
					duration,
					...config
				}))
			}
			return notice
		}, {})
	}
}
