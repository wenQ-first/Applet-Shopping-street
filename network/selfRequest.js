const BASEURL = 'http://123.207.32.32:8000/api/m3'

export default function selfRequest(options){
  return new Promise((resolve,reject) =>{
    wx.request({
      url: BASEURL + options.url,
      method:options.method || 'get',
      data:options.data || {},
      success:(res) =>{
        resolve(res);
      },
      fail:(err) =>{
        reject(err);
      }
    })
  })
}