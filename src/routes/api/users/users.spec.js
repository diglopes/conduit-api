const usersController = require('./users.controller')
const database = require('../../../config/database')
const UserModel = require('./user.model')

const USER_MOCK = {
  username: 'anyUsernameMock',
  password: 'anyPasswordMock',
  email: 'anyEmailMock@email.com'
}

describe('Users controller', () => {
  beforeAll(async () => {
    await database.connect()
  })

  afterAll(async () => {
    await UserModel.deleteOne({ email: USER_MOCK.email })
    await database.disconnect()
  })

  it('should create a user', async () => {
    const httpRequest = {
      body: {
        user: USER_MOCK
      }
    }
    const user = await usersController.create(httpRequest)

    expect(user.data.username).toBe(USER_MOCK.username)
    expect(user.data.email).toBe(USER_MOCK.email)
  })
})
