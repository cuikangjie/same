<template>
<div id="app">
    <router-view></router-view>
    <md-speed-dial md-mode="scale" class="md-fab-bottom-right">
        <md-button class="md-fab" md-fab-trigger>
            <md-icon md-icon-morph :md-iconset='"fa fa-times"'></md-icon>
            <md-icon :md-iconset='"fa fa-bars"'></md-icon>
        </md-button>


        <md-button class="md-fab md-mini md-clean">
            <i class="fa fa-search" @click='jump("/")' aria-hidden="true"></i>
        </md-button>

        <md-button class="md-fab md-mini md-clean">
            <i class="fa fa-hand-o-left" aria-hidden="true" @click='back'></i>
        </md-button>

        <md-button class="md-fab md-mini md-clean">
            <i class="fa fa-hand-o-up" aria-hidden="true" @click='toTop'></i>

        </md-button>


    </md-speed-dial>

</div>
</template>

<script>
import {
    mapActions
} from 'vuex'
export default {
    name: 'app',
    mounted() {
        this.init();

    },
    methods: {
        ...mapActions(['init']),
        toTop() {
            window.scrollTo(0, 0);

        },
        back() {
            this.$router.back();
        },
        jump(url){
          this.$router.push(url)
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    /*max-width: 800px;*/
    margin: auto;
}
@media screen and (min-width: 1000px) {
    #app{
      padding: 50px;
      width: 1000px;
    }
}
@media screen and (min-width: 700px) {
    #app{
      padding: 30px;
    }
}
@media screen and (max-width: 700px) {
    #app{
      padding: 10px;
    }
}
* {
    margin: 0;
    padding: 0;
}

#app>.md-speed-dial.md-fab-bottom-right {
    position: fixed;
    bottom: 50px;
    right: 30px;
}


#app>.md-speed-dial button>i {
    font-size: 18px;
}
.md-button{
  padding: 0;
}
.md-button>span{
  width: 100%;
  height: 100%;
  display: block;
}
</style>
