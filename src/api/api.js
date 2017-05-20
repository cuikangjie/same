import request from './request.js'

export function getChannelSensesApi(id) {
    return request({
        url: `/channel/${id}/senses`,
        // url:'/user/14292602/senses',
        method: 'GET'
    })
}

export function getChannelDetailApi(id) {
    return request({
        url: `/channel/${id}/detail`,
        method: 'GET'
    })
}

export function searchApi(str){
  return request({
    url:`/channel/search?query=${str}&limit=10`,
    method:'GET'
  })
}

export function getChannelSensesMoreApi(url){
  return request({
      url: url,
      method: 'GET'
  })
}


export function getUserProfileApi(uid){
  return request({
    url:`/user/${uid}/profile`,
    method:'GET'
  })
}

export function getUserSensesApi(uid){
  return request({
      url: `/user/${uid}/senses`,
      // url:'/user/14292602/senses',
      method: 'GET'
  })
}
export function getUserSensesMoreApi(url){
  return request({
      url: `${url}`,
      // url:'/user/14292602/senses?offset=1484046385',
      method: 'GET'
  })
}

export function getUserChannelApi(uid,cid){

  return request({
      url: `/user/${uid}/channel/${cid}/senses`,
      // url:'/user/14292602/senses?offset=1484046385',
      method: 'GET'
  })
}

export function loginApi(param){
  return request({
    url:'/user/login',
    data:param
  })
}
