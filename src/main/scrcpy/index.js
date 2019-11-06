const debug = require('debug')('scrcpy')
const fixPath = require('fix-path')
fixPath()
const open = ({ sender }, options) => {
	const args = []
	const { config, devices } = options
	const { title, record, screen, fixed, control, touch, render, bitRate, maxSize, crop } = config
	const { open, openMirror, filepath } = record
	const { x, y, height, width } = crop

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
	if (!control) {
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
	if (height !== 0 || width !== 0) {
		args.push('--crop')
		args.push(`${height}:${width}:${x}:${y}`)
	}

	devices.forEach(({ id }) => {
		const { spawn } = require('child_process')
		const scrcpy = spawn('scrcpy', [...args, '-s', `${id}`])
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
