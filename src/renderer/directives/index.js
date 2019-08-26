import waves from './waves/waves'

export default (Vue) => {
	Vue.directive('focus', {
		inserted: function(el) {
			el.focus()
		}
	})
	Vue.directive('waves', waves)
}
