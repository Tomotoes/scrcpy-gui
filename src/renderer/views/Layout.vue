<template>
	<el-container direction="vertical">
		<layout-header></layout-header>
		<layout-main></layout-main>
		<layout-footer></layout-footer>
	</el-container>
</template>

<script>
	import { LayoutHeader, LayoutMain, LayoutFooter } from '@/components/layout'
	export default {
		name: 'Layout',
		components: { LayoutHeader, LayoutMain, LayoutFooter }
	}
</script>

<style>
</style>
