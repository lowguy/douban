//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '极简主义',
    slogan: '懒得去想，懒得去看，只会静静的体会',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShow: function() {
      setTimeout(function(){
        wx.switchTab({
          url: '../film/list'
        })
      },2000)
  }
})
