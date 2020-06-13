import { Titlebar, Color } from 'custom-electron-titlebar'
import getMenu from './Menu'
import Tray from './Tray'

export default vue => {
	const Menu = getMenu(vue)
	const tray = Tray(Menu)
	window.tray = tray
	let hideWhenClickingClose = false
	const config = vue.$store.get('config')
	if(config) {
		hideWhenClickingClose = config.hidden
	}
	new Titlebar({
		backgroundColor: Color.fromHex('#868686'),
		shadow: true,
		icon: 'https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/favicon.ico',
		maximizable: false,
		hideWhenClickingClose,
		menu: Menu(tray)
	})
}
