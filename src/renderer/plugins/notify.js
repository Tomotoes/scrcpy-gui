import { Notification } from 'element-ui'
const config = {
	dangerouslyUseHTMLString: true,
	customClass: 'custom-notice',
	showClose: true
}

export default {
	install(Vue) {
		Vue.prototype.$notify = ['info', 'success', 'warning', 'error'].reduce((notice, type) => {
			notice[type] = (message, duration = 1000, title = type[0].toLocaleUpperCase() + type.slice(1), position = 'top-right', offset = 58) => {
				return Promise.resolve(Notification({
					message,
					title,
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
