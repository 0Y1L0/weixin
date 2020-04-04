// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap: function(e){
      // let {tabs} =this.data
      const {index} = e.currentTarget.dataset
      // tabs = tabs.map((item, key)=>{
      //   item.isActive = key===index?true:false
      //   return item
      // })
      // this.setData({tabs})
      this.triggerEvent('itemChange', {index})
    }
  }
})
