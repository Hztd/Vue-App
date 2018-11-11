<template>
    <div>
      <h2>第一个Vue组件项目</h2>
      <img src="assets/logo.png" alt="logo"/>
      <HelloWorld/>
    </div>
</template>

<script scoped>
  import HelloWorld from './components/HelloWorld.vue'
    export default {
      components:{
        HelloWorld
      }
    }
</script>

<style>

</style>
