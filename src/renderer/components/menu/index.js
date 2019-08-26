import { Titlebar, Color } from 'custom-electron-titlebar'
import getMenu from './Menu'
import Tray from './Tray'

export default vue => {
	const Menu = getMenu(vue)
	const tray = Tray(Menu)
	window.tray = tray
	new Titlebar({
		backgroundColor: Color.fromHex('#868686'),
		shadow: true,
		icon: 'https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/favicon.ico',
		maximizable: false,
		hideWhenClickingClose: true,
		menu: Menu(tray)
	})
}
