// pages/song/song.js
const audioPlayer = wx.createInnerAudioContext()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        songInfo:{},
        coverUrl:'',
        isLike:false,
        isPlay:false
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getSong(options)
    },
    getSong(options){
      wx.request({
        url: 'https://monster-siren.hypergryph.com/api/song/'+options.id,
        method:'GET',
        timeout:1000,
        success:(res)=>{
          this.setData({
              songInfo:res.data.data,
              coverUrl:options.coverUrl
          })
          console.log(this.data.songInfo);
        }
      })
    },
    playAudio(){
      this.setData({
        isPlay:!this.data.isPlay
      })
      this.play()
    },
    play(){
      if(this.data.isPlay){
        audioPlayer.src = this.data.songInfo.sourceUrl
        audioPlayer.play()
        audioPlayer.onPlay(()=>{
          console.log('开始播放');
        })
      }else{
        console.log('paused');
        audioPlayer.pause()
      }
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