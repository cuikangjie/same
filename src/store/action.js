import {

    getChannelSensesApi,
    getChannelDetailApi,
    searchApi,
    getChannelSensesMoreApi,
    getUserProfileApi,
    getUserSensesApi,
    getUserSensesMoreApi,
    getUserChannelApi,

} from '../api/api.js'

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
    UPDATE_OWNINFO,
    INIT_USERCHENNEL
} from './mutation-types.js'

export function init({
    dispatch
}) {
    // dispatch('getDetail')
}

export function search({
    commit
}, str) {
    searchApi(str).then(data => {
        commit(UPDATE_SEARCHRS, data)
    })

}

function setTitle (title) {

  let str = ''

  if (title) {
    str = title + ' -same'
  } else {
    str = 'same'
  }
  document.title = str

}
// 频道详情
export function getChannelDetail({
    commit
}, id) {
    getChannelDetailApi(id).then(data => {
        setTitle(data.name)
        commit(UPDATE_DETAILDATA, data)
    })
}
// 频道内容
export function getChannelSenses({
    commit
}, id) {
    getChannelSensesApi(id).then(data => {
        commit(UPDATE_SENSESDATA, data)
    })
}

export function getMoreSenses({
    commit
}, url) {
    getChannelSensesMoreApi(url).then(data => {
        commit(UPDATE_SENSESDATA, data)

    })

}

export function getUserProfile({
    commit,
    state
}) {
    getUserProfileApi(state.userId).then(data => {
        commit(UPDATE_USERINFO, data)
    })
}
export function getUserSenses({
    commit,
    state
}) {
    getUserSensesApi(state.userId).then((value) => {
      setTitle(value.results[0].user.username)
        commit(UPDATE_USERSENSES, value)
    })
}
export function getMoreUserSenses({
    commit
}, url) {
    getUserSensesMoreApi(url).then(data => {
        if (data.results.length > 0) {
            commit(UPDATE_USERSENSES, data)
        } else {

        }


    })

}

export function getUserChannel({
    commit,
    state
}, {
    uid,
    cid
}) {
    commit(INIT_USERCHENNEL)
    getUserChannelApi(uid, cid).then(data => {
        commit(UPDATE_USEROWNCHANNEL, data)
    })
}
export function getUserChannelData({commit,state}) {
    getUserSensesMoreApi(state.userChannelData.next).then(data => {
        if (data.results.length > 0) {
            commit(UPDATE_USEROWNCHANNEL, data)
        }


    })
}
export function initUserId({
    commit
}, id) {
    commit(INIT_USERID, id)

}
export function initUserSenses({
    commit
}) {
    commit(INIT_USERSENSES)
}

export function initDetail({
    commit
}) {
    commit(INIT_DETAILDATA)
}

export function initSenses({
    commit
}) {
    commit(INIT_SENSESDATA)

}
