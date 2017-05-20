<template>
<div>
    <md-layout md-gutter>
        <md-layout md-column md-gutter>
            <md-layout md-flex="20"></md-layout>
            <md-layout></md-layout>
        </md-layout>


    </md-layout>
    <md-card md-with-hover v-if='data.results' v-for='(item,index) in data.results' :key='index'>
        <md-card-header>
            <span @click='jump("/user/"+item.user_id)'>
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
          pic: item.media.music.cover
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
                        <img v-lazy="item.photo" @click='jump("/img/"+index)' />
                        <!-- <progressive-img :src="item.photo" /> -->
                        <!-- <md-image :md-src="item.photo"></md-image> -->
                        <!-- <img :src="item.photo" alt="People"> -->
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

    <md-button v-if='data.results&&data.results.length>=30' class="md-raised md-primary" style="width:100%;margin:6px 0;"><span @click='lodingMore'>加载更多</span></md-button>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex'
import VueAplayer from 'vue-aplayer'
import VueDPlayer from 'vue-dplayer'

export default {
    props: {
        data: Object,
        lodingMoreFun: Function
    },
    components: {
        'a-player': VueAplayer,
        'd-player': VueDPlayer,

    },
    methods: {
        ...mapActions(['init']),
        lodingMore() {
            this.$emit('lodingMoreFun')
        },
        jump(url) {
            this.$router.push(`${url}`)
        }
    },

}
</script>

<style>

</style>
