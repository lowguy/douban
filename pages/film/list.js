// pages/film/list.js
var MOVE_BASE_URL = "https://api.douban.com/v2/movie/"
Page({
  data:{
    select:0,
    film:[]
  },
  onLoad:function(options){
    var that = this
    that.getFilmNews()
  },
  httpGet:function(options){
    var that = this
    wx.showNavigationBarLoading()
    that.setData({
      select:options.select
    })
    wx.setNavigationBarTitle({
      title: options.title
    })
    wx.getStorage({
      key: options.skey,
      success: function(res) {
          that.setData({
            film:res.data
          })
          if(res.data.lenth == 0){
            wx.request({
              url: MOVE_BASE_URL+options.url,
              method:'GET',
              header:{
                  "Content-Type":"json"
              },
              success: function(res) {
                wx.hideNavigationBarLoading()
                wx.setStorage({
                  key:options.skey,
                  data:res.data.subjects
                })
                that.setData({
                  film:res.data.subjects
                })
                wx.setNavigationBarTitle({
                  title: res.data.title
                })
              }
            })
          }else{
            wx.hideNavigationBarLoading()
          }
      },
      fail:function(){
        wx.request({
          url: MOVE_BASE_URL+options.url,
          method:'GET',
          header:{
              "Content-Type":"json"
          },
          success: function(res) {
            wx.hideNavigationBarLoading()
            wx.setStorage({
              key:options.skey,
              data:res.data.subjects
            })
            that.setData({
              film:res.data.subjects
            })
            wx.setNavigationBarTitle({
              title: res.data.title
            })
          }
        })
      } 
    })
  },
  //获取即将上映的电影
  getFilmFuture:function(e){
    this.httpGet({
      "select":1
      ,"title":"即将上映"
      ,"skey":"coming_soon"
      ,"url":"coming_soon"
    })
  },
  //获取最新上映的电影
  getFilmNews:function(e){
    var that = this
    that.httpGet({
      "select":0
      ,"title":"最新上映"
      ,"skey":"in_theaters"
      ,"url":"in_theaters"
    })
  },
  getFilmInfo:function(e){
    wx.navigateTo({
      url: './detail?id='+e.currentTarget.dataset.id
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