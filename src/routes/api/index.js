'use strict'

const usersController = require('./users/users.controller')
const { newUserSchema } = require('./users/users.validation')
const validator = require('../../middlewares/validator')

const router = require('express').Router()

// Users
router.post('/users', validator(newUserSchema), async (req, res, next) => {
  const httpResponse = await usersController.create(req)
  if (httpResponse.error) {
    next(httpResponse.error)
  }
  res.status(httpResponse.status).json(httpResponse.data)
})

module.exports = router
