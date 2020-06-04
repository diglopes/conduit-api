require('dotenv').config({
  path: process.env.NODE_ENV !== 'development' ? '.env.prod' : '.env.dev'
})
module.exports = {
  mongodbUri: process.env.MONGO_URL,
  jwtsecret: process.env.JWT_SECRET || 'secret'
}
