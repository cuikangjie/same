<template>
<div id="app">
  <router-view ></router-view>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'app',
    mounted(){
      this.init();

    },
    methods:{
      ...mapActions(['init'])
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    max-width: 800px;
    margin: auto;
    padding: 20px;
}
</style>
