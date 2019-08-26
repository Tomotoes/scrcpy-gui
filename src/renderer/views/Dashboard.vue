<template>
	<el-tabs v-model="activeName" stretch>
		<el-tab-pane :label="$t('dashboard.configuration')" name="1">
			<configuration></configuration>
		</el-tab-pane>
		<el-tab-pane :label="$t('dashboard.management')" name="2">
			<management></management>
		</el-tab-pane>
	</el-tabs>
</template>

<script>
import Configuration from '@/components/dashboard/Configuration'
import Management from '@/components/dashboard/Management'
export default {
	name: 'Dashboard',
	data() {
		return {
			activeName: '2'
		}
	},
	components: {
		Configuration,
		Management
	}
}
</script>

<style></style>
