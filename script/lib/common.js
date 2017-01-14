function httpGet(options,callBack) {
  wx.showNavigationBarLoading()
  wx.request({
      url: options.url,
      method:'GET',
      header:{
          "Content-Type":"json"
      },
      success: function(res) {
        wx.hideNavigationBarLoading()
        callBack(res)
      }
    })
}
function sayGoodbye(name) {
  console.log(`Goodbye ${name} !`)
}

module.exports.httpGet = httpGet
exports.sayGoodbye = sayGoodbye