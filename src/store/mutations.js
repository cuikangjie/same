import {
  UPDATE_DETAILDATA,
  UPDATE_SEARCHRS,
  INIT_DETAILDATA

} from './mutation-types.js'



export default {
	[UPDATE_DETAILDATA](state,data){
    if(!state.detailData.next){
      state.detailData = data;
    }else{
      state.detailData.next = data.next;
      state.detailData.results = state.detailData.results.concat(data.results)
    }

  },
  [UPDATE_SEARCHRS](state,data){
    state.searchRs = data;
  },
  [INIT_DETAILDATA](state){
    state.detailData = {};
  }

}
