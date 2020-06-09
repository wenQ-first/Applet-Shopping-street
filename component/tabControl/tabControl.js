// component/tabControl/tabControl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0  //默认初始的下标值
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(e){
      const index = e.currentTarget.dataset.index;
      this.setData({
        currentIndex: index
      });
      this.triggerEvent('tabControlCilck',index)

    }
  }
})
