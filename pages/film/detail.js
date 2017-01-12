// pages/film/detail.js
Page({
  data:{
    detail:{}
  },
  onLoad:function(options){
    var that = this
    wx.showNavigationBarLoading()
    wx.getStorage({
      key: "move_detail_"+options.id,
      success: function(res) {
          that.setData({
            detail:res.data
          })
          console.log(res.data)
          if(res.data.lenth == 0){
            wx.request({
              url: 'https://api.douban.com/v2/movie/subject/'+options.id,
              method:'GET',
              header:{
                  "Content-Type":"json"
              },
              success: function(re) {
                wx.hideNavigationBarLoading()
                console.log(re.data)
                wx.setStorage({
                  key:"move_detail_"+options.id,
                  data:re.data
                })
                that.setData({
                  detail:re.data
                })
              }
            })
          }else{
            wx.hideNavigationBarLoading()
          }
      },
      fail:function(){
        wx.request({
          url: 'https://api.douban.com/v2/movie/subject/'+options.id,
          method:'GET',
          header:{
              "Content-Type":"json"
          },
          success: function(re) {
            wx.hideNavigationBarLoading()
            console.log(re.data)
            wx.setStorage({
              key:"move_detail_"+options.id,
              data:re.data
            })
            that.setData({
              detail:re.data
            })
          }
        })
      }
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