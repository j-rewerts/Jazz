import global from './global'
import express from 'express'
import getChat from './chat'

const app = express()
const port = process.env.PORT || 3000

if (!process.env.LC_LICENSE) {
  throw new Error('Please provide your LiveChat license number in LC_LICENSE')
}



app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) => {
  const visitorSDK = getChat('key1')
  visitorSDK
    .sendMessage({
      text: 'Hello',
      customId: 123423215,
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))