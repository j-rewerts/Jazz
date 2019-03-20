const express = require('express')
const app = express()
const port = process.env.PORT || 3000

if (!process.env.LC_LICENSE) {
  throw new Error('Please provide your LiveChat license number in LC_LICENSE')
}

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))