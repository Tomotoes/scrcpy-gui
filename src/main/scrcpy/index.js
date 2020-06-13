const debug = require('debug')('scrcpy')
const fixPath = require('fix-path')
fixPath()
const fs = require('fs')
const open = ({ sender }, options) => {
	const args = []
	const { config, devices } = options
	const { title, source, record, screen, fixed, control, touch, render, bitRate, maxSize, maxFps, orientation, crop, window, border, fullscreen, awake } = config
	const { open, openMirror, filepath } = record

	let cmd = 'scrcpy'
	if (source) {
		const scrcpyPath = `${source}\\scrcpy.exe`
		if (!fs.existsSync(scrcpyPath)) {
			sender.send('error', { type: 'unknownScrcpyPathException' })
			return
		}
		cmd = scrcpyPath
	}

	if (title !== '') {
		args.push('--window-title')
		args.push(title)
	}

	if (open) {
		if (!openMirror) {
			args.push('--no-display')
		}
		args.push('--record')
		args.push(filepath)
	}
	if (screen) {
		args.push('--turn-screen-off')
	}
	if (fixed) {
		args.push('--always-on-top')
	}
	if (!border) {
		args.push('--window-borderless')
	}
	if (fullscreen) {
		args.push('--fullscreen')
	}
	if (awake) {
		args.push('--stay-awake')
	} else if (!control) {
		args.push('--no-control')
	}
	if (touch) {
		args.push('--show-touches')
	}
	if (render) {
		args.push('--render-expired-frames')
	}
	if (bitRate !== 8) {
		args.push('--bit-rate')
		args.push(`${bitRate}M`)
	}
	if (maxSize !== 0) {
		args.push('--max-size')
		args.push(`${maxSize}`)
	}
	if (maxFps !== 0) {
		args.push('--max-fps')
		args.push(`${maxFps}`)
	}
	if (orientation !== 0) {
		args.push('--rotation')
		args.push(`${orientation}`)
	}
	{
		const { x, y, height, width } = crop
		if (height !== 0 || width !== 0) {
			args.push('--crop')
			args.push(`${height}:${width}:${x}:${y}`)
		}
	}
	{
		const { x, y, height, width } = window
		if (x !== 0 || y !== 0) {
			args.push('--window-x')
			args.push(`${x}`)
			args.push('--window-y')
			args.push(`${y}`)
		}
		if (height !== 0 || width !== 0) {
			args.push('--window-width')
			args.push(`${width}`)
			args.push('--window-height')
			args.push(`${height}`)
		}
	}

	devices.forEach(({ id }) => {
		const { spawn } = require('child_process')
		const scrcpy = spawn(cmd, [...args, '-s', `${id}`])

		let opened = false
		let exited = false
		scrcpy.stdout.on('data', (data) => {
			if (!opened) {
				sender.send('open', id)
				opened = true
			}
			console.log(`stdout: ${data}`)
		})
		scrcpy.on('error', (code) => {
			console.log(`child process close all stdio with code ${code}`)
			scrcpy.kill()
		})

		scrcpy.on('close', (code) => {
			console.log(`child process close all stdio with code ${code}`)
		})

		scrcpy.on('exit', (code) => {
			console.log(`child process exited with code ${code}`)
			if (!exited) {
				sender.send('close', { success: code === 0, id })
				scrcpy.kill()
				exited = true
			}
		})
	})
}

export default {
	open
}
