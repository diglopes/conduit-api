module.exports = {
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost/conduit',
  jwtsecret: process.env.JWT_SECRET || 'secret'
}
