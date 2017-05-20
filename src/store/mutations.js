import {
  UPDATE_DETAILDATA,
  UPDATE_SEARCHRS,
  INIT_DETAILDATA,
  UPDATE_SENSESDATA,
  INIT_SENSESDATA,
  UPDATE_USERINFO,
  UPDATE_USERSENSES,
  INIT_USERID,
  INIT_USERSENSES,
  UPDATE_USEROWNCHANNEL,
  INIT_USERCHENNEL

} from './mutation-types.js'



export default {
	[UPDATE_SENSESDATA](state,data){
    if(!state.sensesData.next){
      state.sensesData = data;
    }else{
      state.sensesData.next = data.next;
      state.sensesData.results = state.sensesData.results.concat(data.results)
    }

  },
  [UPDATE_DETAILDATA](state,data){
    state.detailData = data;
  },
  [UPDATE_SEARCHRS](state,data){
    state.searchRs = data;
  },
  [INIT_DETAILDATA](state){
    state.detailData = {};
  },
  [INIT_SENSESDATA](state){
    state.sensesData ={};
  },
  [UPDATE_USERINFO](state,info){
    state.userInfo = info;
  },
  [UPDATE_USERSENSES](state,senses){
    // state.userSenses = senses;
    if(!state.userSenses.next){
      state.userSenses = senses;
    }else{
      state.userSenses.next = senses.next;
      state.userSenses.results = state.userSenses.results.concat(senses.results)
    }
  },
  [INIT_USERSENSES](state){
    state.userSenses ={}
  },
  [INIT_USERID](state,id){
    state.userId = id ;
  },
  [UPDATE_USEROWNCHANNEL](state,data){
    if(!state.userChannelData.next){
      state.userChannelData = data;
    }else{
      state.userChannelData.next = data.next;
      state.userChannelData.results = state.userChannelData.results.concat(data.results)
    }
  },
  [INIT_USERCHENNEL](state){
    state.userChannelData = {}
  }

}
