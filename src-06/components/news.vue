<template>
    <ul>
      <li v-for="news in newsArr">{{news}}</li>
    </ul>
</template>

<script type="text/ecmascript-6">
    export default {
      data (){
        return {
          newArr:['news01','news01','news03']
        }
      }
    }
</script>

<style>

</style>
