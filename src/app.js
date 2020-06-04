'use strict'

const server = require('./server')
const database = require('./config/database')

const init = async () => {
  try {
    await database.connect()
    const runningServer = server.listen(process.env.PORT || 3000, () => {
      console.log(`[server] Listening on port ${runningServer.address().port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

init()
