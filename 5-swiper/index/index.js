Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    indicatorColor: 'rgba(0, 0, 0, .6)',
    indicatorActiveColor: 'rgba(255, 255, 255, .5)'
  },

  changeProperty: function (e) {
    const propertyName = e.target.dataset.propertyName
    const newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
    console.log(newData)
  },

  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})