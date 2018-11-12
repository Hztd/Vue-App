<template>
  <ul>
    <li v-for="(m,index) in message" :key="m.id">
      <router-link to="">{{m.title}}</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        messageArr: [
          {id:1, title: 'title01'},
          {id:2, title: 'title02'},
          {id:3, title: 'title03'},
          {id:4, title: 'title04'}
        ]
      }
    }
  }
</script>

<style>

</style>
