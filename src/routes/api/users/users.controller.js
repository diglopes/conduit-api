const UserModel = require('./user.model')

async function create (httpRequest) {
  try {
    const { user } = httpRequest.body
    const newUser = new UserModel()
    newUser.username = user.username
    newUser.email = user.email
    newUser.setPassword(user.password)
    await newUser.save()
    return {
      status: 201,
      data: newUser.toAuthJSON()
    }
  } catch (error) {
    return {
      error
    }
  }
}

module.exports = {
  create
}
