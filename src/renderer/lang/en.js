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
		crop: {
			label: 'cut screen',
			x: 'The abscissa of the cut position',
			y: 'The ordinate of the cut position',
			height: {
				title: 'Height in the cut size',
				content: 'If the height and width are 0, then it will not be cut.'
			},
			width: {
				title: 'Cut width in size',
				content: 'If the height and width are 0, then it will not be cut.'
			},
		},
		other: {
			label: 'other settings',
			fixed: 'Window always on top',
			control: 'Computer control',
			touch: 'Show phone tap location',
			render: 'Rendering all frames',
			screen: 'Turn off the phone screen'
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
			error: '{name} failed to start. Please check the documentation carefully.'
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
