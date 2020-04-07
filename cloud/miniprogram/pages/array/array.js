// pages/array/array.js
const db = wx.cloud.database()
const _ = db.command

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  query: function(){
    db.collection('data')
    .where({
      count: _.in([1,3,4])
    })
    .get().then(console.log)
  }


})