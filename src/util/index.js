export function getUrl(url,id){
  return url.replace(/{channel_id}/g, id)
}

export function saveStorage(key,value){
  if(window.localStorage){
    window.localStorage.setItem(key,JSON.stringify(value))
  }else{
    console.warn('建议使用谷歌浏览器！');
  }
}

export function getStorage(key){
  if(window.localStorage){
    return JSON.parse(window.localStorage.getItem(key));
  }else{
    console.warn('建议使用谷歌浏览器！');
  }
}
