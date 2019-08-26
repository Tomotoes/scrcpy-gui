<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
  @import './styles/index.scss';
	#app {
    user-select: none;
	}
</style>
