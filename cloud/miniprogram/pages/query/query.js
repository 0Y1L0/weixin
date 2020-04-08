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
  },

  query2: function () {
    db.collection('data')
    .field({
      des: true
    })
    .get().then(console.log)
  },

  query3: function () {
    db.collection('data')
      .where({
        name: new db.RegExp({
          regexp: 'name-[1-9]',
          opotions: 'i' 
        })
      })
      .get().then(console.log)
  }

})