const pkg = require('../../../../package')
import { remote } from 'electron'
const { Menu, MenuItem } = remote

export default (vue) => (tray, ...items) => {
	const menu = new Menu()
	menu.append(new MenuItem({
		label: vue.$t('titleBar.document'),
		click: () => remote.shell.openExternal('https://github.com/Tomotoes/scrcpy-gui')
	}))

	menu.append(new MenuItem({
		label: vue.$t('titleBar.checkForUpdates'),
		click: () => remote.shell.openExternal('https://github.com/Tomotoes/scrcpy-gui/releases')
	}))

	menu.append(new MenuItem({
		label: vue.$t('titleBar.feedback'),
		click: () => remote.shell.openExternal('https://github.com/Tomotoes/scrcpy-gui/issues')
	}))
	const submenu = []
	if (!items.length) {
		submenu.push({
			label: 'Supported languages: '
		})
	}
	submenu.push({
		label: '- English',
		click: () => {
			localStorage.setItem('lang', 'en')
			tray.destroy()
			window.location.reload()
		}
	})
	submenu.push({
		type: 'separator'
	})
	submenu.push(
		{
			label: '- 简体中文',
			click: () => {
				localStorage.setItem('lang', 'zhCN')
				tray.destroy()
				window.location.reload()
			}
		})
	submenu.push({
		type: 'separator'
	})
	submenu.push(
		{
			label: '- 繁体中文',
			click: () => {
				localStorage.setItem('lang', 'zhTW')
				tray.destroy()
				window.location.reload()
			}
		})
	menu.append(new MenuItem({
		label: vue.$t('titleBar.switchLanguage'),
		submenu
	}))
	const about = []
	about.push(`name: ${pkg.name}`)
	about.push(`version: ${pkg.version}`)
	about.push(`homepage: ${pkg.homepage}`)
	about.push(`author: ${pkg.author}`)
	about.push(`license: ${pkg.license}`)
	about.push(`description: ${pkg.description}`)
	about.push(`node: ${process.versions.node}`)
	about.push(`chrome: ${process.versions.chrome}`)
	about.push(`electron: ${process.versions.electron}`)
	menu.append(new MenuItem({
		label: vue.$t('titleBar.about'),
		click: () => {
			vue.$alert(about.join('<br/>'), 'Scrcpy-gui', {
				dangerouslyUseHTMLString: true,
			})
		}
	}))
	items.forEach(({ label, click }) => {
		menu.append(new MenuItem({ label: vue.$t(label), click }))
	})
	return menu
}
