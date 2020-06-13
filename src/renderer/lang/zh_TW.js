export default {
	notify: {
		'error': '錯誤',
		'info': '提示',
		'success': '成功',
		'warning': '警告'
	},
	footer: {
		powerBy: '基於',
		author: '作者'
	},
	dashboard: {
		configuration: '投影配置',
		management: '投影管理'
	},
	configuration: {
		source: {
			label: 'Scrcpy',
			placeholder: 'Scrcpy資料夾路徑 - 例如: C:\\scrcpy-win64',
			tooltip: '如果不設定，請將scrcpy資料夾路徑配置到環境變數'
		},
		title: {
			label: '視窗標題',
			placeholder: '預設為手機型號'
		},
		record: {
			label: '錄製投影畫面',
			tip: '開啟後,將錄製投影畫面;關閉後,將儲存已錄製的影片文件到指定路徑',
			filepath: '螢幕錄影文件路徑',
			tooltip: '路徑包括影片名,影片格式為.mkv',
			mirror: '錄影時啟動投影'
		},
		bitRate: {
			label: '投影傳輸比特率',
			popover: '8M為預設比特率'
		},
		maxSize: {
			label: '等比最大解析度',
			popover: '0為預設解析度'
		},
		maxFps: {
			label: '最大FPS幀數',
			popover: '0為預設FPS幀數'
		},
		orientation: {
			label: '旋轉角度',
			popover: '0°為預設值'
		},
		crop: {
			label: '裁剪畫面',
			x: '裁剪位置的横座標',
			y: '裁剪位置的縱座標',
			height: {
				title: '裁剪尺寸中的高度',
				content: '高寬為0,則不裁剪'
			},
			width: {
				title: '裁剪尺寸中的寬度',
				content: '高寬為0,則不裁剪'
			},
		},
		window: {
			label: '初始化',
			x: {
				title: '投影的横座標',
				content: '橫縱座標為0, 則以預設的位置打開'
			},
			y: {
				title: '投影的縱坐標',
				content: '橫縱座標為0, 則以預設的位置打開'
			},
			height: {
				title: '投影畫面的高度',
				content: '高寬為0,則以預設尺寸顯示'
			},
			width: {
				title: '投影畫面的寬度',
				content: '高寬為0,則以預設尺寸顯示'
			},
		},
		other: {
			label: '其他設置',
			fixed: '最上層顯示視窗',
			control: '允許由電腦控制裝置',
			fullscreen: '全螢幕顯示',
			border: '顯示邊框',
			touch: '顯示點擊位置',
			render: '渲染所有幀會增加延遲',
			screen: '開啟螢幕投影時關閉裝置螢幕',
			awake: {
				tooltip: '關閉鎖屏前須打開電腦控制選項',
				content: '關閉螢幕鎖定'
			},
			auto: '自動打開新連接的裝置',
			hidden: {
				tooltip: '需要重新啟動應用才會生效',
				content: '退出後隐藏到系统欄'
			}
		},
		button: {
			save: '保存目前配置',
			default: '恢復預設配置'
		},
		notify: {
			saveSuccess: '配置保存成功'
		}
	},
	management: {
		ip: {
			tip: '裝置區域連線 IP 地址',
			remove: '删除',
			connect: '開啟無線連接'
		},
		devices: {
			name: '名稱',
			edit: '點擊即可修改',
			method: {
				label: '連接方式',
				wired: '有線',
				wireless: '無線'
			},
			operation: '操作',
			disconnect: '中斷連接'
		},
		button: {
			open: '開啟選中裝置的投影'
		},
		whenEmpty: '暫時沒有裝置連接',
		notify: {
			firstLoad: '正在載入裝置',
			reduceDevices: '裝置發生變動',
			newDevices: '偵測到新裝置',
			open: '已成功開啟 {name}'
		},
		open: {
			loading: '正在啟動投影,請稍候...',
			success: '{name} 已正常關閉',
			error: `{name} 開啟失敗,請您仔細確認以下項目:
			<p>1. scrcpy 是否配置正確</p>
			<p>2. scrcpy-gui 本應用是否設置為以系統管理員身分啟動</p>
			<p>3. scrcpy 命令行是否可以開啟裝置</p>
			<p>4. 執行\`adb-devices\`命令 查看是否出現裝置</p>
			<p>5. 手机是否開啟偵錯選項</p>
			如以上皆配置正常，請您到原作者Github提出issue，以協助解决。`
		},
		connect: {
			error: {
				ip: '請輸入正確的 IP 地址',
				exist: '{name} 已經連接'
			},
			loading: '正在啟動無線連接...',
			success: '已成功開啟無線連接',
			fail: '開啟無線連接失敗'
		},
		disconnect: {
			success: '{name} 已中斷連接'
		},
		error: {
			unknownScrcpyPathException: 'Scrcpy 資料夾路徑配置錯誤，請確認該資料夾中存在`scrcpy.exe`'
		}
	},
	titleBar: {
		document: '使用說明',
		checkForUpdates: '檢查更新',
		feedback: '回報與建議',
		switchLanguage: '切換語言',
		about: '關於'
	},
	tray: {
		hide: '隐藏',
		exit: '退出'
	}
}
