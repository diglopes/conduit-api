'use strict'

const mongoose = require('mongoose')
const config = require('./config')
const server = require('./server')

const init = async () => {
  try {
    await mongoose.connect(config.mongodbUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    if (mongoose.connection.readyState === 1) {
      console.log('[mongodb] Connection established successfully')
    }
    const runningServer = server.listen(process.env.PORT || 3000, () => {
      console.log(`[server] Listening on port ${runningServer.address().port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

init()
