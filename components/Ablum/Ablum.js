// components/Ablum/Ablum.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        ablum:{
            type:Object
        }
    },
    created(){
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
        toAlbunm(){
            wx.navigateTo({
              url: '/pages/album/album?id='+this.properties.ablum.cid,
            })
        }
    }
})
