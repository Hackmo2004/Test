<template>
  <v-app>
    <v-main class="app_main">
      <header-component class="header"/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import headerComponent from "@/components/headerComponent";
export default {
  name: 'App',
  components:{
    headerComponent
  }
}
</script>

<style scoped lang="scss">
.header{
  height: 100px;
}
.app{
  &_main{
    min-height: 100vh;
  }
}
</style>
