import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './action'
import getters from './getters'



Vue.use(Vuex)

// 开发数据


const state = {
	detailData:{},
	sensesData:{},
	searchRs:{},
	userId:14292602,
	userInfo:{},
	userSenses:{},
	userChannelData:{}
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	strict: true
})
