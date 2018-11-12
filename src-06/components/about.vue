<template>
    <div>
      <h1>About</h1>
      <div>About route component content</div>
      {{msg}}
    </div>
</template>

<script>
    export default {
      props:['msg'],
      deta (){
        return{
          msg:'atguigu.com'
        }
      }
    }
</script>

<style>

</style>
