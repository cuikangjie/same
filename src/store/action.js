import {getDetailApi,searchApi,getDetailMoreApi} from '../api/api.js'

import {UPDATE_DETAILDATA,UPDATE_SEARCHRS,INIT_DETAILDATA} from './mutation-types.js'

export function init({dispatch}){
  // dispatch('getDetail')
}

export function search({commit},str){
  searchApi(str).then(data =>{
    commit(UPDATE_SEARCHRS,data)
  })

}

export function getDetail({commit},id){
  getDetailApi(id).then(data =>{
    commit(UPDATE_DETAILDATA,data)
  })
}

export function getMoreDetail({commit},url){
  getDetailMoreApi(url).then(data =>{
    commit(UPDATE_DETAILDATA,data)

  })

}

export function initDetail({commit}){
  commit(INIT_DETAILDATA)
}
