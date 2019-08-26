const shell = require('child_process')
function test(){
	const workerProcess = shell.exec('adb tcpip 1111')

	workerProcess.stdout.on('data', function (data) {
		console.log(`stdout: ${data}`)
	})

	workerProcess.stderr.on('data', function (data) {
		if (data.includes('more than one device/emulator')) {
			shell.execSync('adb disconnect')
		}
		test()
	})

	workerProcess.on('close', function (code) {
		console.log(`子进程已退出，退出码 ${code}`)
	})
}

test()

console.log(1)
