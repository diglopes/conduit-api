const usersController = require('./users.controller')
const database = require('../../../config/database')
const UserModel = require('./user.model')
const USERS_MOCK = require('../../../../mocks/USERS')

describe('usersController::create', () => {
  beforeAll(async () => {
    await database.connect()
  })

  afterEach(async () => {
    await UserModel.deleteMany({})
  })

  afterAll(async () => {
    await database.disconnect()
  })

  it('should create a user', async () => {
    const httpRequest = USERS_MOCK.httpRequest.newUser
    const user = await usersController.create(httpRequest)
    expect(user.data.username).toBe(httpRequest.body.user.username)
    expect(user.data.email).toBe(httpRequest.body.user.email)
  })

  it('should throw if username is already registered', async () => {
    const httpRequest = USERS_MOCK.httpRequest.newUser
    const httpRequestDiferentEmail = Object.assign({ body: { user: { email: 'difentEmail@email.com' } } }, httpRequest)
    await usersController.create(httpRequest)
    const user = await usersController.create(httpRequestDiferentEmail)
    expect(user).toHaveProperty('error')
    expect(user.error.message).toMatch(/duplicate/gi)
  })

  it('should throw if email is already registered', async () => {
    const httpRequest = USERS_MOCK.httpRequest.newUser
    const httpRequestDiferentUsername =
      Object.assign({ body: { user: { username: 'diferentUsername' } } }, httpRequest)
    await usersController.create(httpRequest)
    const user = await usersController.create(httpRequestDiferentUsername)
    expect(user).toHaveProperty('error')
    expect(user.error.message).toMatch(/duplicate/gi)
  })
})
