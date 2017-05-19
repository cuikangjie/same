<template>
<div class="detail">

    <md-card md-with-hover v-if='detailData.results' v-for='(item,index) in detailData.results' :key='index'>
        <md-card-header>
            <md-avatar>

                <img :src="item.user.avatar" alt="icon">
            </md-avatar>

            <div class="md-title">{{item.user.username}}</div>
        </md-card-header>

        <a-player v-if='item.media.sound' :autoplay='false' :music="{
            title: ' ',
            author: item.user.username,
            url: item.media.sound.src,
            pic: 'http://devtest.qiniudn.com/Preparation.jpg',
          }">
        </a-player>

            <md-card-media v-if='item.photo'>
              <progressive-img :src="item.photo"  />
                <!-- <md-image :md-src="item.photo"></md-image> -->
                <!-- <img :src="item.photo" alt="People"> -->
            </md-card-media>

            <md-card-content>
                {{item.txt}}
            </md-card-content>
    </md-card>

    <md-button class="md-raised md-primary"><span @click='lodingMore'>加载更多</span></md-button>

</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'

import VueAplayer from 'vue-aplayer'

export default {
    data() {
        return {

        }
    },
    components: {
        'a-player': VueAplayer
    },
    computed: {
        ...mapGetters(['detailData'])
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.initDetail()
            vm.getDetail(to.params.id)
        })
    },
    methods: {
        ...mapActions(['getDetail', 'initDetail', 'getMoreDetail']),
        lodingMore() {
            this.getMoreDetail(this.detailData.next)

        }

    }
}
</script>

<style>
.detail .md-card {
    margin-top: 10px;
    margin-bottom: 10px;
}

.detail .md-card .md-card-header .md-avatar~.md-subhead,
.md-card .md-card-header .md-avatar~.md-title {
    line-height: 40px;
    font-size: 16px;
}
</style>
