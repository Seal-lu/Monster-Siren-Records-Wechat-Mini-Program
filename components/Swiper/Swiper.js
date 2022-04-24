// components/Swiper/Swiper.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        swiperItem:[]
    },
    created(){
        wx:wx.request({
          url: 'https://monster-siren.hypergryph.com/api/recommends',
          method: 'get',
          timeout: 1000,
          success: (res) => {
            this.setData({
                swiperItem:res.data.data,
            })
          }
        })
    },
    /**
     * 组件的方法列表
     */
    methods: {

    }
})
