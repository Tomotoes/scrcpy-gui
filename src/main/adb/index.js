import adb from 'adbkit'
const client = adb.createClient()
const debug = require('debug')('scrcpy')

const onDevices = sender => {
	client.trackDevices()
		.then(function (tracker) {
			tracker.on('add', function (device) {
				debug('Device %s was plugged in', device.id)
				client.listDevices().then(function (devices) {
					debug(devices)
					sender.send('devices', devices)
				})
			})
			tracker.on('remove', function (device) {
				debug('Device %s was unplugged', device.id)
				client.listDevices().then(function (devices) {
					debug(devices)
					sender.send('devices', devices)
				})
			})
			tracker.on('end', function () {
				debug('Tracking stopped')
			})
		})
		.catch(function (err) {
			debugor('Something went wrong:', err.stack)
		})
}
const connect = ({ sender }, args) => {
	const { id, ip } = args
	const success = 'Successfully opened wireless connection'
	const fail = 'Failed to open wireless connection'
	if (id) {
		client.tcpip(id)
			.then(function (port) {
				client.connect(ip, port).then(function (err) {
					if (err) {
						sender.send('connect', { success: false, message: fail })
						return
					}
					sender.send('connect', { success: true, message: success })
				}).catch(() => {
					sender.send('connect', { success: false, message: fail })
				})
			}).catch(() => {
				client.connect(ip).then(function (err) {
					if (err) {
						sender.send('connect', { success: false, message: fail })
						return
					}
					sender.send('connect', { success: true, message: success })
				}).catch(() => {
					sender.send('connect', { success: false, message: fail })
				})
			})
	} else {
		client.connect(ip).then(function (err) {
			if (err) {
				sender.send('connect', { success: false, message: fail })
				return
			}
			sender.send('connect', { success: true, message: success })
		}).catch(() => {
			sender.send('connect', { success: false, message: fail })
		})
	}
}

const disconnect = ({ sender }, ip) => {
	client.disconnect(ip).then(id => {
		debug(id)
		sender.send('connect', { success: false, message: 'Device shutdown succeeded' })
	}).catch(err => {
		debug(err)
		sender.send('connect', { success: false, message: 'Device shutdown failed' })
	})
}

export default {
	connect, disconnect, onDevices
}
