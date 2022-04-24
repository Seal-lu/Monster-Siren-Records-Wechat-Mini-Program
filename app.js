// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.getSongs()
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  getSongs(){
    wx.request({
      url: 'https://monster-siren.hypergryph.com/api/songs',
      method:'GET',
      timeout:1000,
      success:(res)=>{
        this.globalData.songsList=res.data.data.list
      }
    })
  },
  globalData: {
    userInfo: null,
    songsList:[]
  }
})
