<template>
<div>

    <md-input-container>
        <label>频道名</label>
        <md-input v-model.trim="searchData"></md-input>
    </md-input-container>

    <md-list v-if='searchRs.results' v-for='(item,index) in searchRs.results' :key='index'>
        <md-list-item>
            <div @click='itemClick(item)'>
                <md-avatar>
                    <img :src="item.icon" alt="icon">
                </md-avatar>
                <span>{{item.name}}</span>
            </div>
        </md-list-item>
    </md-list>
    <div class="detail">
        <md-tabs md-fixed>
            <md-tab id="movies" md-label="收藏的频道">
                <md-list v-if='likePD' v-for='(item,index) in likePD' :key='index'>
                    <md-list-item>
                        <div @click='itemClick(item)'>
                            <md-avatar>
                                <img :src="item.icon" alt="icon">
                            </md-avatar>
                            <span>{{item.name}}</span>
                        </div>
                    </md-list-item>
                </md-list>
            </md-tab>

            <md-tab id="music" md-label="收藏的人">
                <md-list v-if='likeUser' v-for='(item,index) in likeUser' :key='index'>
                    <md-list-item>
                        <div @click='userClick(item)'>
                            <md-avatar>
                                <img :src="item.avatar" alt="icon">
                            </md-avatar>
                            <span>{{item.username}}</span>
                        </div>
                    </md-list-item>
                </md-list>
            </md-tab>

        </md-tabs>
    </div>

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
export default {
    data() {
        return {
            searchData: '',
            likePD: [],
            likeUser:[]

        }
    },
    mounted() {
        this.likePD = getStorage('likePD');
        this.likeUser = getStorage('likeUser');

    },
    computed: {
        ...mapGetters(['detailData', 'searchRs'])
    },
    watch: {
        searchData(val) {
            if (val) {
                this.search(val)
            }

        }
    },
    methods: {
        ...mapActions(['search']),
        itemClick(data) {
            this.$router.push(`/detail/${data.id}`)
        },
        userClick(data){
          this.$router.push(`/user/${data.id}`)
        }

    }
}
</script>

<style>

</style>
