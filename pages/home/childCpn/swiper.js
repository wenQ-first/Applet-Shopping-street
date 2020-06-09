// pages/home/childCpn/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    banners:{
      type: Array,
      default(){
        return [];
      }
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

  },
  lifetimes:{
    created() {
      console.log(1);
    },
    attached() {
      console.log(2);
    }
  }
})
