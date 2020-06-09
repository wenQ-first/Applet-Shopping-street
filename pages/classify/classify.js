// pages/classify/classify.js
import {getCategory,getSubcategory} from "../../network/getCategory.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftNavData: [],  //左侧导航栏
    currentIndex:0, //当前点击的item下标
    currentRightData:[] //右侧的数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取左侧导航栏数据
    getCategory().then(res =>{
      const arr = res.data.data.category.list; //存放左侧导航栏数据
      this.setData({
        leftNavData: arr
      });
        /* 获取右侧数据展示数据 */
    const maitKey = this.data.leftNavData[this.data.currentIndex].maitKey; //存储右侧数据的参数
    getSubcategory({maitKey}).then(res =>{
      this.setData({
        currentRightData: res.data.data.list
      })
      console.log(this.data.currentRightData)
    })
 
    });
  
  },
  /* 左侧导航栏的item点击 */
  itemClick(e){
    const index = e.currentTarget.dataset.index; //存储当前点击的item的index
    this.setData({
      currentIndex: index
    });
    const maitKey = this.data.leftNavData[this.data.currentIndex].maitKey; //存储右侧数据的参数
    getSubcategory({maitKey}).then(res =>{
      this.setData({
        currentRightData: res.data.data.list
      })
    })
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})