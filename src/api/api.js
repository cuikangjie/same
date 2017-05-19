import request from './request.js'

export function getDetailApi(id) {
    return request({
        url: `/channel/${id}/senses`,
        method: 'GET'
    })
}

export function searchApi(str){
  return request({
    url:`/channel/search?query=${str}&limit=10`,
    method:'GET'
  })
}

export function getDetailMoreApi(url){
  return request({
      url: url,
      method: 'GET'
  })
}
