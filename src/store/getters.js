export default {
    detailData: state => {return state.detailData},
    searchRs : state => {return state.searchRs},
    sensesData: state => {return state.sensesData},
    user : state =>{return state.userInfo.user || {};},
    userSenses : state => {return state.userSenses},
    userChannelData : state => {return state.userChannelData}

}
