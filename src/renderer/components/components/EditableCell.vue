<template>
	<div @click="onFieldClick" class="edit-cell">
		<el-tooltip
			v-if="!editMode && !showInput"
			:placement="toolTipPlacement"
			:open-delay="toolTipDelay"
			:content="toolTipContent"
		>
			<div tabindex="0" class="cell-content" :class="{ 'edit-enabled-cell': canEdit }" @keyup.enter="onFieldClick">
				<slot name="content"></slot>
			</div>
		</el-tooltip>
		<component
			:is="editableComponent"
			v-if="editMode || showInput"
			ref="input"
			@focus="onFieldClick"
			@keyup.enter.native="onInputExit"
			v-on="listeners"
			v-bind="$attrs"
			v-model="model"
		>
			<slot name="edit-component-slot"></slot>
		</component>
	</div>
</template>
<script>
export default {
	name: 'editable-cell',
	inheritAttrs: false,
	props: {
		value: {
			type: String,
			default: ''
		},
		toolTipContent: {
			type: String,
			default: 'Click to edit'
		},
		toolTipDelay: {
			type: Number,
			default: 500
		},
		toolTipPlacement: {
			type: String,
			default: 'top-start'
		},
		showInput: {
			type: Boolean,
			default: false
		},
		editableComponent: {
			type: String,
			default: 'el-input'
		},
		closeEvent: {
			type: String,
			default: 'blur'
		},
		canEdit: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			editMode: false
		}
	},
	computed: {
		model: {
			get() {
				return this.value
			},
			set(val) {
				this.$emit('input', val)
			}
		},
		listeners() {
			return {
				[this.closeEvent]: this.onInputExit,
				...this.$listeners
			}
		}
	},
	methods: {
		onFieldClick() {
			if (this.canEdit) {
				this.editMode = true
				this.$nextTick(() => {
					let inputRef = this.$refs.input
					if (inputRef && inputRef.focus) {
						inputRef.focus()
					}
				})
			}
		},
		onInputExit() {
			this.editMode = false
		},
		onInputChange(val) {
			this.$emit('input', val)
		}
	}
}
</script>
<style>
.cell-content {
	min-height: 40px;
	padding-left: 5px;
	padding-top: 5px;
	border: 1px solid transparent;
}
.edit-enabled-cell {
	border: 1px dashed #409eff;
}
.edit-cell {
	min-height: 35px;
	cursor: pointer;
}
</style>
