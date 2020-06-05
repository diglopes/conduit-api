const invalidCredentials = () => {
  const err = new Error('Credenciais invalidas')
  err.message = 'Nao foi possivel autenticar com as credenciais fornecidas'
  err.status = 422
  throw err
}

module.exports = {
  invalidCredentials
}
