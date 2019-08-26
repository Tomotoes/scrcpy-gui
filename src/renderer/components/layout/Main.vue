<template>
  <el-main>
    <transition name="fade" mode="out-in">
      <router-view :key="key"></router-view>
    </transition>
  </el-main>
</template>

<script>
export default {
  name: 'LayoutMain',
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>

<style>
.el-main{
  height:84vh;
}
</style>