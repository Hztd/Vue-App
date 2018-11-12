<template>
  <div>
    <h1>About</h1>
    <div>About route component content</div>
    {{msg}}
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props:['mag'],
      created(){
        console.log(this.msg)
      }
    }
</script>

<style>

</style>
