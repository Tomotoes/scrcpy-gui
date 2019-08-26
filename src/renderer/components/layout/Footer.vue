<template>
	<el-footer>
		<span
			>{{$t('footer.powerBy')}}
			<a
				@click="$openExternal('https://electronjs.org')"
				class="footer-link"
				>Electron</a
			>
			&nbsp;❤ &nbsp; {{$t('footer.author')}} -
			<a @click="$openExternal('https://tomotoes.com')" class="footer-link"
				>Simon Ma</a
			></span
		>
	</el-footer>
</template>

<script>
export default {
	name: 'LayoutFooter'
}
</script>

<style>
.el-footer {
	height: 7vh !important;
	background-image: linear-gradient(
		-90deg,
		#bfbfbf 0%,
		#7d7d7d 20%,
		#7d7d7d 80%,
		#bfbfbf 100%
	);
	border-top: 5px solid #e0e2e6;
	clear: both;
	overflow: hidden;
	line-height: 7vh;
	font-size: 17px;
	text-align: center;
	text-shadow: 1px 0px 10px #484444;
	color: #f7f7f7;
}
.footer-link {
	transition: all 0.3s;
}
.footer-link:hover {
	font-size: 18.5px;
}
</style>
