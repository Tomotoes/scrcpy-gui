<template>
	<el-card>
		<el-form ref="form" :model="config" label-width="110px">
			<el-form-item :label="$t('configuration.title.label')">
				<el-input
					v-model="config.title"
					:placeholder="$t('configuration.title.placeholder')"
					prefix-icon="el-icon-phone"
					clearable
				></el-input>
			</el-form-item>
			<el-form-item :label="$t('configuration.source.label')">
				<el-tooltip
					class="item"
					effect="dark"
					:content="$t('configuration.source.tooltip')"
					placement="top"
				>
					<el-input
						v-model="config.source"
						:placeholder="$t('configuration.source.placeholder')"
						prefix-icon="el-icon-star-off"
						clearable
					></el-input>
				</el-tooltip>
			</el-form-item>
			<el-form-item :label="$t('configuration.record.label')">
				<el-switch
					@change="
						tip($t('configuration.record.tip'), config.record.open === true)
					"
					v-model="config.record.open"
				></el-switch
				>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
				<el-checkbox
					v-model="config.record.openMirror"
					:disabled="!config.record.open"
					>{{ $t("configuration.record.mirror") }}</el-checkbox
				>
			</el-form-item>
			<el-form-item :label="$t('configuration.record.filepath')">
				<el-tooltip
					class="item"
					effect="dark"
					:content="$t('configuration.record.tooltip')"
					placement="top"
					:disabled="!config.record.open"
				>
					<el-input
						v-model="config.record.filepath"
						prefix-icon="el-icon-location-information"
						:disabled="!config.record.open"
						clearable
					></el-input>
				</el-tooltip>
			</el-form-item>

			<el-form-item :label="$t('configuration.bitRate.label')">
				<el-popover
					placement="top-start"
					:content="$t('configuration.bitRate.popover')"
					width="250"
					trigger="focus"
				>
					<el-slider
						slot="reference"
						v-model.number="config.bitRate"
						:max="1024"
						:min="1"
						show-input
					></el-slider>
				</el-popover>
			</el-form-item>

			<el-form-item :label="$t('configuration.maxSize.label')">
				<el-popover
					placement="top-start"
					:content="$t('configuration.maxSize.popover')"
					width="250"
					trigger="focus"
				>
					<el-slider
						slot="reference"
						v-model.number="config.maxSize"
						:max="1920"
						:min="0"
						show-input
					></el-slider>
				</el-popover>
			</el-form-item>

			<el-form-item :label="$t('configuration.maxFps.label')">
				<el-popover
					placement="top-start"
					:content="$t('configuration.maxFps.popover')"
					width="250"
					trigger="focus"
				>
					<el-slider
						slot="reference"
						v-model.number="config.maxFps"
						:max="300"
						:min="0"
						show-input
					></el-slider>
				</el-popover>
			</el-form-item>

			<el-form-item :label="$t('configuration.orientation.label')">
				<el-select
					v-model="config.orientation"
					clearable
					:placeholder="$t('configuration.orientation.popover')"
				>
					<el-option
						v-for="item in orientations"
						:key="item.value"
						:label="item.label"
						:value="item.value"
					>
					</el-option>
				</el-select>
			</el-form-item>

			<el-form-item :label="$t('configuration.window.label')">
				<el-popover
					placement="top-start"
					:title="$t('configuration.window.x.title')"
					:content="$t('configuration.window.x.content')"
					width="200"
					trigger="hover"
				>
					<el-input-number
						slot="reference"
						size="mini"
						v-model="config.window.x"
					></el-input-number>
				</el-popover>
				<el-popover
					placement="top-start"
					:title="$t('configuration.window.y.title')"
					:content="$t('configuration.window.y.content')"
					width="200"
					trigger="hover"
				>
					<el-input-number
						slot="reference"
						size="mini"
						v-model="config.window.y"
					></el-input-number>
				</el-popover>
				<el-popover
					placement="top-start"
					:title="$t('configuration.window.height.title')"
					:content="$t('configuration.window.height.content')"
					width="200"
					trigger="hover"
				>
					<el-input-number
						slot="reference"
						size="mini"
						v-model="config.window.height"
					></el-input-number>
				</el-popover>
				<el-popover
					placement="top-start"
					:title="$t('configuration.window.width.title')"
					:content="$t('configuration.window.width.content')"
					width="200"
					trigger="hover"
				>
					<el-input-number
						slot="reference"
						size="mini"
						v-model="config.window.width"
					></el-input-number>
				</el-popover>
			</el-form-item>

			<el-form-item :label="$t('configuration.crop.label')">
				<el-popover
					placement="top-start"
					:content="$t('configuration.crop.x')"
					width="200"
					trigger="hover"
				>
					<el-input-number
						slot="reference"
						size="mini"
						v-model="config.crop.x"
					></el-input-number>
				</el-popover>
				<el-popover
					placement="top-start"
					:content="$t('configuration.crop.y')"
					width="200"
					trigger="hover"
				>
					<el-input-number
						slot="reference"
						size="mini"
						v-model="config.crop.y"
					></el-input-number>
				</el-popover>
				<el-popover
					placement="top-start"
					:title="$t('configuration.crop.height.title')"
					:content="$t('configuration.crop.height.content')"
					width="200"
					trigger="hover"
				>
					<el-input-number
						slot="reference"
						size="mini"
						v-model="config.crop.height"
					></el-input-number>
				</el-popover>
				<el-popover
					placement="top-start"
					:title="$t('configuration.crop.width.title')"
					:content="$t('configuration.crop.width.content')"
					width="200"
					trigger="hover"
				>
					<el-input-number
						slot="reference"
						size="mini"
						v-model="config.crop.width"
					></el-input-number>
				</el-popover>
			</el-form-item>

			<el-form-item :label="$t('configuration.other.label')">
				<el-checkbox v-model="config.fixed" border size="medium">{{
					$t("configuration.other.fixed")
				}}</el-checkbox>
				<el-checkbox v-model="config.control" border size="medium">{{
					$t("configuration.other.control")
				}}</el-checkbox>
				<el-checkbox v-model="config.border" border size="medium">{{
					$t("configuration.other.border")
				}}</el-checkbox>
				<el-checkbox v-model="config.fullscreen" border size="medium">{{
					$t("configuration.other.fullscreen")
				}}</el-checkbox>
				<el-tooltip
					class="item"
					effect="dark"
					:content="$t('configuration.other.awake.tooltip')"
					placement="top"
				>
					<el-checkbox v-model="config.awake" border size="medium">{{
						$t("configuration.other.awake.content")
					}}</el-checkbox>
					</el-tooltip>
				<el-checkbox v-model="config.touch" border size="medium">{{
					$t("configuration.other.touch")
				}}</el-checkbox>
				<el-checkbox v-model="config.render" border size="medium">{{
					$t("configuration.other.render")
				}}</el-checkbox>
				<el-checkbox v-model="config.screen" border size="medium">{{
					$t("configuration.other.screen")
				}}</el-checkbox>
				<el-checkbox v-model="config.auto" border size="medium">{{
					$t("configuration.other.auto")
				}}</el-checkbox>
				<el-tooltip
					class="item"
					effect="dark"
					:content="$t('configuration.other.hidden.tooltip')"
					placement="top"
				>
					<el-checkbox v-model="config.hidden" border size="medium">{{
						$t("configuration.other.hidden.content")
					}}</el-checkbox>
				</el-tooltip>
			</el-form-item>
			<el-divider content-position="right">
				<el-button type="text" @click="changeLocale">简/繁/English</el-button>
			</el-divider>
			<div style="margin:10px auto;text-align:center">
				<el-button type="primary" @click.native.prevent="save" plain v-waves>{{
					$t("configuration.button.save")
				}}</el-button>
				<el-button
					type="success"
					@click.native.prevent="setDefault"
					plain
					v-waves
					>{{ $t("configuration.button.default") }}</el-button
				>
			</div>
		</el-form>
	</el-card>
</template>

<script>
export default {
	name: "Config",
	data() {
		return {
			config: {
				source: "",
				title: "",

				record: {
					open: false,
					openMirror: true,
					filepath: "C:/users/user/Desktop/file.mkv"
				},

				screen: false,
				fixed: false,
				control: true,
				touch: true,
				render: false,
				bitRate: 8,
				maxSize: 0,
				maxFps: 0,
				orientation: 0,
				border: true,
				fullscreen: false,
				awake: false,
				auto: false,
				hidden: false,
				crop: {
					x: 0,
					y: 0,
					height: 0,
					width: 0
				},
				window: {
					x: 0,
					y: 0,
					height: 0,
					width: 0
				}
			},
			orientations: [
				{
					value: 0,
					label: "0°"
				},
				{
					value: 1,
					label: "90°"
				},
				{
					value: 2,
					label: "180°"
				},
				{
					value: 3,
					label: "270°"
				}
			]
		};
	},
	watch: {
		"config.control"(newVal, oldVal) {
			if (this.config.awake && !newVal) {
				this.config.awake = false
			}
		},
		"config.awake"(newVal, oldVal) {
			newVal && (this.config.control = true);
		}
	},
	created() {
		if (this.$store.has("config")) {
			this.config = this.$store.get("config");
		} else {
			this.$store.put("config", this.config);
		}
	},
	methods: {
		tip(message, condition) {
			if (condition) {
				this.$notify.info(message);
			}
		},
		save() {
			this.$store.put("config", this.config);
			this.$notify.success(this.$t("configuration.notify.saveSuccess"));
		},
		setDefault() {
			const { source, hidden } = this.config;
			this.config = {
				source,
				title: "",

				record: {
					open: false,
					openMirror: true,
					filepath: "C:/users/user/Desktop/file.mkv"
				},

				screen: false,
				fixed: false,
				control: true,
				touch: true,
				render: false,
				bitRate: 8,
				maxSize: 0,
				maxFps: 0,
				orientation: 0,
				border: true,
				fullscreen: false,
				awake: false,
				auto: false,
				hidden,
				crop: {
					x: 0,
					y: 0,
					height: 0,
					width: 0
				},
				window: {
					x: 0,
					y: 0,
					height: 0,
					width: 0
				}
			};
			this.$store.put("config", this.config);
		},
		changeLocale() {
			let nextLang = "en";
			if (this.$i18n.locale === "zhCN") {
				nextLang = "zhTW";
			} else if (this.$i18n.locale === "en") {
				nextLang = "zhCN";
			}
			localStorage.setItem("lang", nextLang);
			window.tray.destroy();
			window.location.reload();
		}
	}
};
</script>

<style>
.el-form-item {
	margin-bottom: 10px !important;
}
</style>
