// components/Songs/Songs.js
var app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        album:Object
    },

    /**
     * 组件的初始数据
     */
    data: {
        songs:[],
        coverUrl:''
    },
    attached(){
        this.getSong()
    },
    ready(){
    },
    /**
     * 组件的方法列表
     */
    methods: {
        toSongPage(e) {
            console.log(e.currentTarget);
            let id = e.currentTarget.dataset.id
            wx.navigateTo({
              url: '/pages/song/song?id='+id+'&coverUrl='+this.data.coverUrl,
            })
        },
        getSong(){
            let songsArr = []
            app.globalData.songsList.forEach(item => {
                if(item.albumCid == this.properties.album.cid){
                    songsArr.push(item);
                    this.setData({
                        songs:songsArr,
                        coverUrl:this.properties.album.coverUrl
                    })
                }
            });
        }
    }
})
