// pages/User/info.js
var app = getApp()
Page({
  data:{
    note:"笔记",
    collect:"收藏",
    userInfo: {},
    collections: []
  },
  onLoad:function(options){
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    }),
    wx.request({
      url: 'https://api.douban.com/v2/book/user/156234452/collections',
      success: function(res) {
        that.setData({
          collections:res.data.collections
        })
      }
    })
  },
  bindFilmList:function(){
    wx.navigateTo({
      url: '../film/list'
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})