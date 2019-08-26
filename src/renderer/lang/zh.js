export default {
	footer: {
		powerBy: '基于',
		author: '作者'
	},
	dashboard: {
		configuration: '镜像配置',
		management: '镜像管理'
	},
	configuration: {
		title: {
			label: '窗口标题',
			placeholder: '默认为手机型号'
		},
		record: {
			label: '镜像录屏',
			tip: '开启后,将录制镜像;关闭后,将生成已录制的视频文件到指定路径',
			filepath: '录屏文件路径',
			tooltip: '路径包括视频名,视频格式为.mkv',
			mirror: '录屏时打开镜像'
		},
		bitRate: {
			label: '镜像传输比特率',
			popover: '8为默认比特率,不建议修改'
		},
		maxSize: {
			label: '等比最大分辨率',
			popover: '0为默认分辨率,不建议修改'
		},
		crop: {
			label: '剪切屏幕',
			x: '剪切位置的横坐标',
			y: '剪切位置的纵坐标',
			height: {
				title: '剪切尺寸中的高度',
				content: '高宽为0,则不剪切'
			},
			width: {
				title: '剪切尺寸中的宽度',
				content: '高宽为0,则不剪切'
			},
		},
		other: {
			label: '其他设置',
			fixed: '窗口置顶',
			control: '电脑控制',
			touch: '显示手机点按位置',
			render: '渲染所有帧 会增加延迟',
			screen: '打开镜像时关闭手机屏幕'
		},
		button: {
			save: '保存当前配置',
			default: '恢复默认配置'
		},
		notify: {
			saveSuccess: '配置保存成功'
		}
	},
	management: {
		ip: {
			tip: '设备局域网 IP 地址',
			remove: '删除',
			connect: '开启无线连接'
		},
		devices: {
			name: '名称',
			edit: '点击即可修改',
			method: {
				label: '连接方式',
				wired: '有线',
				wireless: '无线'
			},
			operation: '操作',
			disconnect: '断开连接'
		},
		button: {
			open: '打开选中的镜像'
		},
		whenEmpty: '暂无设备连接',
		notify: {
			firstLoad: '正在加载设备',
			reduceDevices: '设备发生变动',
			newDevices: '检测到新设备',
			open: '已成功打开 {name}'
		},
		open: {
			loading: '正在打开镜像,请稍等片刻...',
			success: '{name} 已正常关闭',
			error: '{name} 打开失败,请您仔细查阅帮助文档'
		},
		connect: {
			error: {
				ip: '请输入正确的 IP 地址',
				exist: '{name} 已经连接'
			},
			loading: '正在开启无线连接...',
			success: '已成功打开无线连接',
			fail: '开启无线连接失败'
		},
		disconnect: {
			success: '{name} 已断开连接'
		}
	},
	titleBar: {
		document: '帮助文档',
		checkForUpdates: '检查更新',
		feedback: '反馈提议',
		switchLanguage: '切换语言',
		about: '关于'
	},
	tray: {
		hide: '隐藏',
		exit: '退出'
	}
}
