// pages/film/list.js
var app = getApp()
Page({
  data:{
    screenHeight:0,
    lastX: 0,
    lastY: 0,
    select:0,
    film:[]
  },
  onLoad:function(options){
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          screenHeight: res.windowHeight
        })
      }
    })
    that.getFilmNews()
  },
  //获取即将上映的电影
  getFilmFuture:function(e){
    var that = this
    var url = "https://api.douban.com/v2/movie/coming_soon"
    that.setData({
      select:1
    })
    app.getModel('common').httpGet({"url":url},function(res){
      that.setData({
        film:res.data.subjects
      })
    })
  },
  //获取最新上映的电影
  getFilmNews:function(e){
    var that = this
    var url = "https://api.douban.com/v2/movie/in_theaters"
    that.setData({
      select:0
    })
    app.getModel('common').httpGet({"url":url},function(res){
      that.setData({
        film:res.data.subjects
      })
    })
  },
  //获取电影详情
  getFilmInfo:function(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: './detail?id='+id
    })
  },
  handletouchmove: function(event) {
    let currentX = event.touches[0].pageX
    let currentY = event.touches[0].pageY
    console.log(this.data.lastX)
    if ((currentX - this.data.lastX) < 0)
      console.log("向左滑动")
    else if (((currentX - this.data.lastX) > 0))
      console.log("向右滑动")

    //将当前坐标进行保存以进行下一次计算
    this.data.lastX = currentX
    this.data.lastY = currentY
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    //滑动监听
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})