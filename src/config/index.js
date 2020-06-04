module.exports = {
  mongodbUri: process.env.MONGO_URL,
  jwtsecret: process.env.JWT_SECRET || 'secret'
}
