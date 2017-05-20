<template>
<div class="detail">
    <md-card>
        <md-card-header>
            <md-avatar>
                <img :src="detailData.icon" alt="icon">
            </md-avatar>

            <div class="md-title">{{detailData.name}}</div>
            <div class="refer">
                <md-avatar class="md-avatar-icon md-accent">
                   <i v-if='likeFlag' class="fa fa-heart" ></i>
                    <i v-else  class="fa fa-heart-o" aria-hidden="true" @click='like'></i>
                </md-avatar>
                <md-avatar class="md-avatar-icon md-accent">
                    <i class="fa fa-refresh" aria-hidden="true" @click='initSensesData(detailData.id)'></i>

                </md-avatar>


            </div>
        </md-card-header>
    </md-card>

    <md-tabs md-fixed v-if='detailData.config&&detailData.config.tabs' @change='changeTab'>
        <md-tab v-for='(item,index) in detailData.config.tabs.content' :md-label="item.title" :key='index'>
            <card :data='sensesData' @lodingMoreFun='lodingMore' />
        </md-tab>

    </md-tabs>
    <card v-else :data='sensesData' @lodingMoreFun='lodingMore' />




</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'


import Card from '../compontents/card.vue'
import {
    getUrl
} from '../util/index.js'
import {
    saveStorage,
    getStorage
} from '../util/index.js'
export default {
    data() {
        return {
            selIndex: 0,
            url: '',
            likeFlag: false

        }
    },
    components: {

        'card': Card
    },
    computed: {
        ...mapGetters(['detailData', 'sensesData'])
    },
    beforeRouteEnter(to, from, next) {
        let sto = getStorage('likePD');

        next(vm => {
            if (sto && sto.filter(obj => {
                    return obj.id == to.params.id
                }).length > 0) {
                vm.likeFlag = true;
            }
            vm.initDetail()
            vm.getChannelDetail(to.params.id)
            vm.initSensesData(to.params.id)
        })
    },
    methods: {
        ...mapActions(['getChannelSenses', 'initDetail', 'initSenses', 'getMoreSenses', 'getChannelDetail']),
        lodingMore() {
            this.getMoreSenses(this.sensesData.next)

        },
        changeTab(index) {
            this.selIndex = index;
            if (index !== 0) {
                this.url = getUrl(this.detailData.config.tabs.content[index].url, this.detailData.id);
                this.initSensesData(this.detailData.id);
            } else {
                this.url = '';
            }


        },
        initSensesData(id) {
            this.initSenses();
            if (this.url) {
                this.getMoreSenses(this.url)
            } else {
                this.getChannelSenses(id)
            }

        },
        like() {
            let sto = getStorage('likePD');
            if (sto) {
                sto.push(this.detailData)
                saveStorage('likePD', sto)
            } else {
                saveStorage('likePD', [this.detailData])
            }
            this.likeFlag = true;


        }

    }
}
</script>

<style>
.detail .md-card {
    margin-top: 10px;
    margin-bottom: 10px;
}


/*.detail .md-card .md-card-header .md-avatar~.md-subhead,
.md-card .md-card-header .md-avatar~.md-title {
    line-height: 40px;
    font-size: 16px;
}*/

.detail .md-theme-default.md-tabs>.md-tabs-navigation {
    box-shadow: 0 1px 5px rgba(0, 0, 0, .2), 0 2px 2px rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12);
    background: #fff;
}

.detail .md-theme-default.md-tabs>.md-tabs-navigation .md-tab-header,
.detail .md-theme-default.md-tabs>.md-tabs-navigation .md-tab-header.md-active {
    color: black;
}

.detail .md-tabs .md-tab {
    padding-left: 0;
    padding-right: 0;
}

.refer {
    position: absolute;
    top: 16px;
    right: 0;
}

.refer .md-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
}

.refer .md-avatar>i {
    font-size: 20px;
    color: #fff;
    cursor: pointer;
}
</style>
