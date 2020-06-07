<template>
	<el-card>
		<div class="wrap-form">
			<el-divider content-position="center">{{
				$t("management.ip.tip")
			}}</el-divider>
			<el-autocomplete
				v-model="ip"
				:fetch-suggestions="getWirelessDevices"
				prefix-icon="el-icon-position"
				@select="handleSelect"
			>
				<template slot-scope="{ item }">
					<div class="item-name">
						<span style="color:#999">{{ $t("management.devices.name") }}: </span
						>{{ item.name }}
					</div>
					<span class="item-id">{{ item.id }}</span>
					<el-button
						class="item-remove"
						@click.native.prevent="deleteWirelessDevice(item.id)"
						type="text"
						size="small"
					>
						{{ $t("management.ip.remove") }}
					</el-button>
				</template>
			</el-autocomplete>
			<br />
			<br />
			<el-button
				type="success"
				@click.native.prevent="connect"
				:disabled="ip === ''"
				plain
				v-waves
				>{{ $t("management.ip.connect") }}</el-button
			>
		</div>

		<el-divider><i class="el-icon-mobile-phone"></i></el-divider>
		<div v-if="currentDevices.length > 0">
			<el-table
				:data="currentDevices"
				@selection-change="selectionChange"
				tooltip-effect="dark"
				style="width:100%"
				stripe
				border
			>
				<el-table-column type="selection" width="40"></el-table-column>
				<el-table-column label="ID" prop="id"
					><template slot-scope="scope">
						<el-tag size="medium" type="warning">{{
							scope.row.id
						}}</el-tag></template
					></el-table-column
				>
				<el-table-column :label="$t('management.devices.name')">
					<editable-cell
						prop="name"
						slot-scope="{ row }"
						:can-edit="editModeEnabled"
						v-model="row.name"
						:toolTipContent="$t('management.devices.edit')"
						@input="newName => rename(row, newName)"
					>
						<span slot="content">{{ row.name }}</span>
					</editable-cell>
				</el-table-column>
				<el-table-column
					prop="method"
					:label="$t('management.devices.method.label')"
					width="90"
					:filters="[
						{
							text: $t('management.devices.method.wired'),
							value: $t('management.devices.method.wired')
						},
						{
							text: $t('management.devices.method.wireless'),
							value: $t('management.devices.method.wireless')
						}
					]"
					:filter-method="filterTag"
					filter-placement="bottom-end"
				>
					<template slot-scope="scope">
						<el-tag
							:type="
								scope.row.method === $t('management.devices.method.wired')
									? 'primary'
									: 'success'
							"
							>{{ scope.row.method }}</el-tag
						>
					</template>
				</el-table-column>

				<el-table-column
					fixed="right"
					:label="$t('management.devices.operation')"
					width="85"
				>
					<template slot-scope="scope">
						<el-button
							@click.native.prevent="disconnect(scope.$index, scope.row.id)"
							type="text"
							size="small"
							:disabled="
								scope.row.method === $t('management.devices.method.wired')
							"
						>
							{{ $t("management.devices.disconnect") }}
						</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="wrap-button">
				<el-button
					type="primary"
					@click.native.prevent="open(selectedDevices)"
					:disabled="selectedDevices.length === 0"
					plain
					v-waves
				>
					{{ $t("management.button.open") }}
				</el-button>
			</div>
		</div>
		<div class="when-empty" v-else>
			<span> {{ $t("management.whenEmpty") }} </span>
		</div>
	</el-card>
</template>

<script>
import EditableCell from '../components/EditableCell'
import Regular from '@/utils/regular'
import { ipcRenderer } from 'electron'
export default {
	name: 'Devices',
	data() {
		return {
			editModeEnabled: true,
			currentDevices: [],
			selectedDevices: [],
			ip: '192.168.0.',
			wirelessDevices: [],
			deletedEvent: false,
			stoppedNotify: false,
			firstLoad: true,
			wired: '',
			wireless: ''
		}
	},
	created() {
		this.wireless = this.$t('management.devices.method.wireless')
		this.wired = this.$t('management.devices.method.wired')
		const { wireless, wired } = this

		this.wirelessDevices = this.$store.get('wirelessDevices') || []
		ipcRenderer.on('devices', (event, _devices) => {
			const preDevicesCount = this.currentDevices.length
			const devices = _devices
				.filter(({ id }, idx) => _devices.findIndex((device) => id === device.id) === idx)
				.map(({ id }) => ({ id, name: this.$store.get(id) || id, method: Regular('ip', id) ? wireless : wired }))

			if(this.$store.get('config').auto){
				const newDevices = devices.filter(device => !this.currentDevices.some(({id}) => id === device.id))
				this.open(newDevices)
			}
			this.currentDevices = devices
			const preWirelessDevicesCount = this.wirelessDevices.length
			this.currentDevices.forEach(({ id, name, method }) => {
				if (method === wired) {
					return
				}
				if (this.wirelessDevices.every((device) => id !== device.id)) {
					this.wirelessDevices.push({ id, name })
				}
			})
			preWirelessDevicesCount !== this.wirelessDevices.length &&
				this.$store.put('wirelessDevices', this.wirelessDevices)
			if (this.firstLoad) {
				this.firstLoad = false
				this.$notify.success(this.$t('management.notify.firstLoad'), 800)
			} else if (!this.stoppedNotify && preDevicesCount > this.currentDevices.length) {
				this.$notify.info(this.$t('management.notify.reduceDevices'))
			} else if (!this.stoppedNotify && preDevicesCount < this.currentDevices.length) {
				this.$notify.success(this.$t('management.notify.newDevices'))
			}
		})
		const opened = {}
		ipcRenderer.on('open', (_, id) => {
			if (!opened[id]) {
				opened[id] = true
				setTimeout(() => {
					this.$notify.success(this.$t('management.notify.open', { name: this.$store.get(id) || id }))
				}, 500)
				setTimeout(() => {
					opened[id] = false
				}, 1000)
			}
		})

		const closed = {}
		ipcRenderer.on('close', (_, { success, id }) => {
			if (!closed[id]) {
				closed[id] = true
				const result = success ? 'success' : 'error'
				this.$notify[result](this.$t(`management.open.${ result}`, { name: this.$store.get(id) || id }))

				setTimeout(() => {
					closed[id] = false
				}, 1000)
			}
		})

		ipcRenderer.on('error', (_, { type }) => {
			console.log(`management.error.${ type}`)
			this.$notify.error(this.$t(`management.error.${ type}`))
		})
	},
	components: {
		EditableCell
	},
	methods: {
		open(devices) {
			this.$notify.info(this.$t('management.open.loading'), 2000)
			const config = this.$store.get('config')
			ipcRenderer.send('open', { config, devices })
		},
		connect() {
			if (!Regular('ip', this.ip)) {
				this.$notify.error(this.$t('management.connect.error.ip'))
				return
			}
			const device = this.currentDevices.find(({ id }) => id === this.ip || id.split(':')[0] === this.ip)
			if (device) {
				this.$notify.warning(this.$t('management.connect.error.exist', { name: device.name }))
				return
			}

			const wireDevice = this.currentDevices.filter(({ method }) => method === this.wired)[0]

			const openedIP = this.ip
			ipcRenderer.send('connect', { id: wireDevice ? wireDevice.id : null, ip: this.ip })

			this.stoppedNotify = true
			this.$notify.info(this.$t('management.connect.loading'))
			setTimeout(() => {
				if (this.currentDevices.every(({ id }) => id !== openedIP && id.split(':')[0] !== openedIP)) {
					this.$notify.error(this.$t('management.connect.fail'))
				} else {
					this.$notify.success(this.$t('management.connect.success'))
				}
			}, 1000)
			setTimeout(() => {
				this.stoppedNotify = false
			}, 2000)
		},
		getWirelessDevices(queryString, cb) {
			const wirelessDevices = this.wirelessDevices
			const results = queryString ? wirelessDevices.filter(this.createFilter(queryString)) : wirelessDevices
			cb(results)
		},
		createFilter(queryString) {
			return (device) => device.id.startsWith(queryString)
		},
		filterTag(value, row) {
			return row.method === value
		},
		rename({ id, method }, newName) {
			this.$store.put(id, newName)
			if (method === this.wireless) {
				const device = this.wirelessDevices.find((device) => device.id === id)
				device.name = newName
				this.$store.put('wirelessDevices', this.wirelessDevices)
			}
		},
		disconnect(index, id) {
			this.currentDevices.splice(index, 1)
			ipcRenderer.send('disconnect', id)
			this.$notify.info(this.$t('management.disconnect.success', { name: this.$store.get(id) || id }))
		},
		selectionChange(val) {
			this.selectedDevices = val
		},
		handleSelect(item) {
			this.ip = this.deletedEvent ? '192.168.0.' : item.id
			this.deletedEvent = false
		},
		deleteWirelessDevice(id) {
			this.deletedEvent = true
			const index = this.wirelessDevices.findIndex((device) => device.id === id)
			this.wirelessDevices.splice(index, 1)
			this.$store.put('wirelessDevices', this.wirelessDevices)
		}
	}
}
</script>

<style>
.el-card__body {
	padding: 12px !important;
}
.wrap-button {
	text-align: center;
	margin: 20px auto;
}
.wrap-form {
	text-align: center;
	margin-bottom: 20px;
}
.display {
	display: none;
}
.item-id {
	font-size: 14px;
	color: #666;
}
.item-id::before {
	content: "ID: ";
	color: #999;
}
.item-remove {
	padding: 0 10px;
}
.when-empty {
	margin: 10px auto;
	text-align: center;
}
</style>
