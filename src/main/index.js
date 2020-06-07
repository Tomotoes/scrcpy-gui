import { app, BrowserWindow, ipcMain } from 'electron'
import adb from './adb'
import scrcpy from './scrcpy'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
	global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
	? 'http://localhost:9080'
	: `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */
	mainWindow = new BrowserWindow({
		height: 800,
		width: 513,
		frame: false,
		title: 'Scrcpy',
		fullscreenable: false,
		// titleBarStyle: 'hidden',
		vibrancy: 'ultra-dark',
		center: true,
		icon: `${__static}/icons/256x256.png`,
		show: false,
		webPreferences: {
			backgroundThrottling: false
		},
		// resizable: false
	})

	mainWindow.setMenu(null)

	mainWindow.loadURL(winURL)
	mainWindow.once('ready-to-show', () => {
		mainWindow.show()
		// mainWindow.webContents.openDevTools()
	})
	mainWindow.on('close', () => {
		ipcMain.removeAllListeners('open')
		ipcMain.removeAllListeners('connect')
		ipcMain.removeAllListeners('disconnect')
	})

	mainWindow.on('closed', () => {
		mainWindow = null
	})

	mainWindow.webContents.on('did-finish-load', function () {
		adb.onDevices(mainWindow.webContents)
		ipcMain.on('open', scrcpy.open)
		ipcMain.on('connect', adb.connect)
		ipcMain.on('disconnect', adb.disconnect)

	})
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow()
	}
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
