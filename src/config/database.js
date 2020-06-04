const mongoose = require('mongoose')
const config = require('./index.js')

async function connect () {
  await mongoose.connect(config.mongodbUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  if (mongoose.connection.readyState === 1) {
    console.log('[mongodb] Connection established successfully')
  }
}

async function disconnect () {
  await mongoose.connection.close()
  if (mongoose.connection.readyState === 0) {
    console.log('[mongodb] database disconnected')
  }
}

module.exports = {
  connect,
  disconnect
}
