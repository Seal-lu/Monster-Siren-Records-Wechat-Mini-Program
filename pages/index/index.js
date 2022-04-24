
const app = getApp()
console.log(app);
Page({
  data:{
    album:[],
    searched:[]
  },
  onLoad(){
    this.getAblum()
  },
  getAblum(){
    wx:wx.request({
      url: 'https://monster-siren.hypergryph.com/api/albums',
      method: 'get',
      timeout: 1000,
      success: (res) => {
        this.setData({
          album:res.data.data
        })
      },
    })
    
  },
  searchSong(e){
    let album = this.data.album
    album.forEach(item => {
      if(item.name.includes(e.detail.value)&& e.detail.value !=''){
        console.log(item);
      }
    });
  }
})
