import  selfRequest  from './selfRequest.js'

export function getSlideshowData(){
  return selfRequest({
    url: "/home/multidata"
  });
}

/* 请求tab栏的三项数据 */
export function getTabConData(data){
  return selfRequest({
    url: "/home/data",
    data
  });
}