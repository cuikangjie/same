<template>
<div class="detail">
    <md-card>
        <md-card-header v-if='userSenses.results && userSenses.results.length>0'>

            <md-avatar>
                <img :src="user.avatar || userSenses.results[0].user.avatar" alt="icon">
            </md-avatar>

            <div class="md-title">{{user.username || userSenses.results[0].user.username}}</div>
            <div class="refer">
                <md-avatar class="md-avatar-icon md-accent">
                   <i v-if='likeFlag' class="fa fa-heart" ></i>
                    <i v-else  class="fa fa-heart-o" aria-hidden="true" @click='like'></i>
                </md-avatar>


            </div>

        </md-card-header>
    </md-card>

    <!-- <md-tabs md-fixed v-if='detailData.config&&detailData.config.tabs' @change='changeTab'>
        <md-tab v-for='(item,index) in detailData.config.tabs.content' :md-label="item.title" :key='index'>
            <card :data='sensesData' @lodingMoreFun='lodingMore'/>
        </md-tab>

    </md-tabs> -->

    <md-card md-with-hover v-if='userSenses.results' v-for='(item,index) in userSenses.results' :key='index'>
        <md-card-header>
          <span @click='jump("/userChannel/"+item.channel.id+"/"+item.user.id)'>
            <md-avatar>


                <img v-lazy="item.channel.icon" alt="icon">
            </md-avatar>

            <div class="md-title">{{item.channel.name}}</div>
            <div class="md-subhead">{{item.created_at+'000' | DateFormat('yyyy-MM-dd hh:mm')}}</div>
          </span>
        </md-card-header>
        <d-player v-if='item.media.video' :video="{
          url: item.media.video.src,
          pic: item.media.video.cover
        }" :autoplay="false" :loop='false' ref="player">
            </d-player>

        <a-player v-if='item.media.music' :autoplay='false' :music="{
          title: item.media.music.name,
          author: item.media.music.author,
          url: item.media.music.src,
          pic: item.media.music.cover,
        }">
            </a-player>

        <a-player v-if='item.media.sound' :autoplay='false' :music="{
          title: ' ',
          author: item.user.username,
          url: item.media.sound.src,
          pic: 'http://devtest.qiniudn.com/Preparation.jpg',
        }">
            </a-player>

            <md-card-media v-if='item.photo'>
                <!-- <progressive-img :src="item.photo" /> -->
                <!-- <md-image :md-src="item.photo"></md-image> -->
                <img v-lazy="item.photo" alt="People">
            </md-card-media>

            <md-card-content>
                {{item.txt}}
            </md-card-content>

            <!-- <md-card-actions>
                <md-button class="md-icon-button">
                    <md-icon :md-iconset='"fa fa-heart-o"'></md-icon>
                </md-button>

                <md-button class="md-icon-button">
                    <md-icon :md-iconset='"fa fa-eye"'></md-icon>
                    {{item.views}}
                </md-button>

            </md-card-actions> -->
    </md-card>

    <md-button v-if='userSenses.results && userSenses.results.length>=30' class="md-raised md-primary"><span @click='lodingMore'>加载更多</span></md-button>




</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
import VueAplayer from 'vue-aplayer'
import VueDPlayer from 'vue-dplayer'
import Card from '../compontents/card.vue'
import {getUrl} from '../util/index.js'
import {
    saveStorage,
    getStorage
} from '../util/index.js'

export default {
    data() {
        return {
          selIndex:0,
          url:'',
          likeFlag:false

        }
    },
    components: {


        'a-player':VueAplayer,
        'd-player': VueDPlayer,
    },
    computed: {
        ...mapGetters(['user', 'userSenses'])
    },
    beforeRouteEnter(to, from, next) {
      let sto = getStorage('likeUser');
        next(vm => {
          if (sto && sto.filter(obj => {
                  return obj.id == to.params.id
              }).length > 0) {
              vm.likeFlag = true;
          }
            vm.initUserId(to.params.id)

            vm.initSensesData();
        })
    },
    methods: {
        ...mapActions(['getUserProfile', 'initUserSenses', 'getUserSenses','getMoreUserSenses',"initUserId"]),
        lodingMore() {
            this.getMoreUserSenses(this.userSenses.next)

        },
        initSensesData(id){
          this.initUserSenses();
          // this.getUserProfile()
          this.getUserSenses();
        },
        like(){
          let sto = getStorage('likeUser');
          if (sto) {
              sto.push(this.userSenses.results[0].user)
              saveStorage('likeUser', sto)
          } else {
              saveStorage('likeUser', [this.userSenses.results[0].user])
          }
          this.likeFlag = true;
        },
        jump(url) {
            this.$router.push(`${url}`)
        }

    }
}
</script>

<style>

</style>
