const { object, string } = require('yup')

const newUserSchema = object().shape({
  body: object().shape({
    user: object().shape({
      username: string().matches(/^[a-zA-Z0-9]+$/).required(),
      email: string().email().required(),
      password: string().min(6).required()
    })
  })
})

module.exports = {
  newUserSchema
}
