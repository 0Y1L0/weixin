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

	queryUrl: function () {
		wx.cloud.getTempFileURL({
			fileList: ['cloud://hao-weather-0y1l0.6861-hao-weather-0y1l0-1301154191/my-image.jpg'],
			success: res=>{
				console.log(res)
			}
		})
	},


})