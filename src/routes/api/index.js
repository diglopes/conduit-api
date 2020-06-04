'use strict'

const usersController = require('./users/users.controller')
const { newUserSchema } = require('./users/users.validation')
const validator = require('../../middlewares/validator')

const router = require('express').Router()

// Users
router.post('/users', validator(newUserSchema), usersController.create)

module.exports = router
