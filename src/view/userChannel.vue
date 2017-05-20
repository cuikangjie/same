<template>
<div class="detail">
    <md-card>
        <md-card-header v-if='userChannelData.results && userChannelData.results.length>0'>

            <md-avatar>
                <img :src="userChannelData.results[0].channel.icon" alt="icon">
            </md-avatar>

            <div class="refer">
                <md-avatar class="md-avatar-icon md-accent">
                    <i class="fa fa-sign-in" aria-hidden="true" @click='jump("/detail/"+userChannelData.results[0].channel.id)'></i>

                </md-avatar>


            </div>

            <div class="md-title">{{userChannelData.results[0].channel.name}}</div>

        </md-card-header>
    </md-card>

    <!-- <md-list v-if='userChannelData.results' v-for='(item,index) in userChannelData.results' :key='index'>
      <md-list-item>
          <div @click='itemClick(item)'>
              <md-avatar>
                  <img :src="item.channel.icon" alt="icon">
              </md-avatar>
              <span>{{item.channel.name}}</span>
          </div>
      </md-list-item>
  </md-list> -->
    <md-card md-with-hover v-if='userChannelData.results' v-for='(item,index) in userChannelData.results' :key='index'>
        <md-card-header>
            <span>
          <md-avatar>


              <img v-lazy="item.user.avatar" alt="icon">
          </md-avatar>

          <div class="md-title">{{item.user.username}}</div>
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

    <md-button v-if='userChannelData.results && userChannelData.results.length>=30' class="md-raised md-primary" style="width: 100%;margin: 6px 0px;">
        <span @click='getUserChannelData'>加载更多</span>
    </md-button>




</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'

import {
    saveStorage,
    getStorage
} from '../util/index.js'
import VueAplayer from 'vue-aplayer'
import VueDPlayer from 'vue-dplayer'

export default {
    mounted() {



    },
    components: {


        'a-player':VueAplayer,
        'd-player': VueDPlayer,
    },
    beforeRouteEnter(to, from, next) {


        next(vm => {
            vm.getUserChannel({
                cid: to.params.id,
                uid: to.params.uid
            });
        })


    },
    computed: {
        ...mapGetters(['userChannelData'])
    },
    methods: {
        ...mapActions(['getUserChannel','getUserChannelData']),
        jump(url) {
            this.$router.push(`${url}`)
        }

    }
}
</script>

<style>

</style>
