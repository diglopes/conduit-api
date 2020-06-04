const UserModel = require('mongoose').model('User')

async function create (req, res, next) {
  try {
    const { user } = req.body
    const newUser = new UserModel()
    newUser.username = user.username
    newUser.email = user.email
    newUser.setPassword(user.password)
    await newUser.save()
    return res.status(201).json({ user: newUser.toAuthJSON() })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create
}
