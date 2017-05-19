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
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    data() {
        return {
            searchData: ''

        }
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
        }

    }
}
</script>

<style>

</style>
