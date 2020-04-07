const cloud = require('wx-server-sdk')

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV,  // 环境ID
  // env支持传入一个object,指定各个服务使用的环境
  traceUser: true //是否在控制台查看用户信息
})

// 云函数入口函数
exports.main = async (event, context) => {

  console.log(event)

  const { OPENID } = cloud.getWXContext()

  const result = await cloud.openapi.customerServiceMessage.send({
    touser: OPENID,
    msgtype: 'text',
    text: {
      content: '收到：' + event.Content,
    }ß
  })

  console.log(result)

  return result
}
