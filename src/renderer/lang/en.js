export default {
	footer: {
		powerBy: 'Power by',
		author: 'Author'
	},
	dashboard: {
		configuration: 'Configuration',
		management: 'Management'
	},
	configuration: {
		source: {
			label: 'Scrcpy',
			placeholder: 'Scrcpy folder path - e.g: C:\\scrcpy-win64',
			tooltip: 'If not set, please configure the scrcpy folder path to an environment variable'
		},
		title: {
			label: 'window title',
			placeholder: 'The default is the device model',
		},
		record: {
			label: 'record screen',
			tip: 'When turned on, the mirror will be recorded; when closed, the recorded video file will be generated to the specified path.',
			filepath: 'file path',
			tooltip: 'The path includes the video name and the video format is .mkv',
			mirror: 'Open mirror when recording'
		},
		bitRate: {
			label: 'bit rate',
			popover: '8 is the default bit rate'
		},
		maxSize: {
			label: 'max size',
			popover: '0 is the default value'
		},
		maxFps: {
			label: 'max fps',
			popover: '0 is the default value'
		},
		orientation: {
			label: 'rotation angle',
			popover: '0° is the default value'
		},
		window: {
			label: 'initialization',
			x: {
				title: 'Mirror\'s abscissa position',
				content: 'If the abscissa and ordinate are both 0, it will open in the default position'
			},
			y: {
				title: 'Mirror\'s ordinate position',
				content: 'If the abscissa and ordinate are both 0, it will open in the default position'
			},
			height: {
				title: 'Mirror height',
				content: 'If the width and height are both 0, the default size is displayed'
			},
			width: {
				title: 'Mirror width',
				content: 'If the width and height are both 0, the default size is displayed'
			},
		},
		crop: {
			label: 'cut screen',
			x: 'The abscissa of the cut position',
			y: 'The ordinate of the cut position',
			height: {
				title: 'Height in the cut size',
				content: 'If the height and width are both 0, then it will not be cut'
			},
			width: {
				title: 'Cut width in size',
				content: 'If the height and width are both 0, then it will not be cut'
			},
		},
		other: {
			label: 'other settings',
			fixed: 'Window always on top',
			control: 'Computer control',
			fullscreen: 'Display in full screen',
			border: 'Show window border',
			touch: 'Show phone tap location',
			render: 'Rendering all frames',
			screen: 'Turn off the phone screen',
			awake: {
				tooltip: 'The computer control option must be opened before turning off the lock screen',
				content: 'Turn off the lock screen'
			},
			auto: 'Automatically turn on connected devices',
			hidden: {
				tooltip: 'Need to restart the application to take effect',
				content: 'Hide to system bar after exit'
			}
		},
		button: {
			save: 'Save configuration',
			default: 'Restore default'
		},
		notify: {
			saveSuccess: 'Configuration saved successfully!'
		}
	},
	management: {
		ip: {
			tip: 'Device LAN IP address',
			remove: 'delete',
			connect: 'Turn on wireless connection'
		},
		devices: {
			name: 'name',
			edit: 'Click to edit',
			method: {
				label: 'method',
				wired: 'wired',
				wireless: 'wireless'
			},
			operation: 'operation',
			disconnect: 'disconnect'
		},
		button: {
			open: 'Open the selected mirror'
		},
		whenEmpty: 'No device connection',
		notify: {
			firstLoad: 'Loading device...',
			reduceDevices: 'Equipment changes',
			newDevices: 'New device detected',
			open: '{name} has been successfully opened'
		},
		open: {
			loading: 'Opening the mirror, please wait a moment...',
			success: '{name} has been closed normally',
			error: `{name} failed to start. Please check the documentation carefully:
			<p>1. Whether scrcpy configured correctly</p>
			<p>2. Whether the phone opens the debugging option</p>
			<p>3. Whether the scrcpy-gui software set to start by the administrator</p>
			<p>4. Whether the scrcpy command line can open the device</p>
			<p>5. Run the \`adb-devices\` command to see if the device appears</p>
			If the above configuration is normal, please go to Github to file an issue, and I will resolve it as soon as possible`
		},
		connect: {
			error: {
				ip: 'Please enter the correct IP address',
				exist: '{name} has been connected'
			},
			loading: 'Opening wireless connection...',
			success: 'Wireless connection turned on',
			fail: 'Failed to open wireless connection'
		},
		disconnect: {
			success: '{name} already disconnected'
		},
		error: {
			'unknownScrcpyPathException': 'The path of the Scrcpy folder is incorrectly configured. Make sure that `scrcpy.exe` exists in this folder'
		}
	},
	titleBar: {
		document: 'Document',
		checkForUpdates: 'Update',
		feedback: 'Feedback',
		switchLanguage: 'Languages',
		about: 'About'
	},
	tray: {
		hide: 'Hide',
		exit: 'Exit'
	}
}
