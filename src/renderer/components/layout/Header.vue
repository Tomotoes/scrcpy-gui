<template>
	<el-header>
		<span>{{ title }}</span>
	</el-header>
</template>

<script>
export default {
	name: 'LayoutHeader',
	data() {
		return {
			title: 'Scrcpy',
		}
	}
}
</script>

<style>
.el-header {
	-webkit-app-region: drag;

	height: 5.2vh !important;
	text-align: center;
	background-color: #868686;
	color: #ececec;
	font-size: 25px;
	text-shadow: 1px 0px 4px #000;
	line-height: 4.6vh;
	box-shadow: 0px 2px 18px 5px #ccc;
}
.handle-bar {
	-webkit-app-region: no-drag;
}
</style>
