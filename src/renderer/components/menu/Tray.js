import { remote } from 'electron'
const { Tray, getCurrentWindow } = remote
const window = getCurrentWindow()
const tray = new Tray(`${__static}/icons/16x16.png`)

export default Menu => {
	const menu = Menu(tray,{ label: 'tray.hide', click() { window.hide() } }, {
		label: 'tray.exit', click() {
			window.close()
		}
	})

	tray.setContextMenu(menu)
	tray.setTitle('Scrcpy')
	tray.setToolTip('Scrcpy')
	tray.on('right-click', () => {
		tray.popUpContextMenu(menu)
	})
	tray.on('click', () => {
		window.show()
	})
	return tray
}
