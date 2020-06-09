
import { getSlideshowData,getTabConData } from '../../network/homeRequest.js'

// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[], //保存轮播图数据
    recommend:[],  //保存推荐栏的数据
    tabConData:{
      pop:{
        list:[],
        page:0
      },
      new:{
        list:[],
        page:0
      },
      sell:{
        list:[],
        page:0
      }
    },
    currentName:'pop'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   getSlideshowData().then(res =>{
     this.setData({
       banners: res.data.data.banner.list,  //设置获取过来的轮播图数据
       recommend: res.data.data.recommend.list  //设置推荐栏数据
     })
   });
   this.getTabContrlData('pop');
   this.getTabContrlData('new');
   this.getTabContrlData('sell');

   
  },
  /* 封装一层请求 */
 getTabContrlData(type){
   //定义页码
   let page = this.data.tabConData[type].page + 1;

   /* 请求流行新款热卖三项数据 */
   getTabConData({type,page}).then(res =>{
     //定义一个用来保存老对象的数据，因为小程序不像vue可以随心所欲该数据
   const oldList = this.data.tabConData ;
   oldList[type].list.push(...res.data.data.list);
   oldList[type].page = page;
   //通过setdata来改变数据
    this.setData({
      tabConData:oldList
    })
  });
 },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  tabClick(e){
   const index = e.detail; 
   const arr = ['pop','new','sell'];
    this.setData({
      currentName:arr[index]
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getTabContrlData(this.data.currentName);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})