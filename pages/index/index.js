//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '豆瓣',
    slogan: '汇聚一亿人的生活趣味',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var res = app.getModel('common').sayHello('890')
    console.log(res+"index")
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
