// pages/home/childCpn/product/product.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabData:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    imgCilck(e){
      const iid = e.currentTarget.dataset.item.iid;
      wx.redirectTo({
        url: `/pages/details/detail?id=${iid}`
      })
    }
  }
})
