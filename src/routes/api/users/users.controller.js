const UserModel = require('./user.model')
const userErrors = require('./user.errors')

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

async function login (httpRequest) {
  try {
    const { user } = httpRequest.body
    const userFound = await UserModel.findOne({ email: user.email })
    const passwordMatches = userFound && await userFound.validatePassword(user.password)
    if (!userFound || !passwordMatches) userErrors.invalidCredentials()
    return { user: userFound.toAuthJSON() }
  } catch (error) {
    return {
      error
    }
  }
}

module.exports = {
  create,
  login
}
