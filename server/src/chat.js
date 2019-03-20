import * as LivechatVisitorSDK from '@livechat/livechat-visitor-sdk'

export default (key) => {
  const visitorSDK = LivechatVisitorSDK.init({
    license: process.env.LC_LICENSE,
    group: 4
  })

  visitorSDK.on('new_message', newMessage => {
    console.log(newMessage)
  })

  return visitorSDK
}