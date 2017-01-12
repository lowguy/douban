// pages/casts/detail.js
Page({
  data:{
    detail:[]
  },
  onLoad:function(options){
    var that = this
    wx.showNavigationBarLoading()
    wx.request({
        url: 'https://api.douban.com/v2/movie/celebrity/'+options.id,
        method:'GET',
        header:{
            "Content-Type":"json"
        },
        success: function(re) {
          console.log(re)
          wx.hideNavigationBarLoading()
          that.setData({
            detail:re.data
          })
        }
      })
  },
  getFilmInfo:function(e){
    wx.navigateTo({
      url: '../film/detail?id='+e.currentTarget.dataset.id
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