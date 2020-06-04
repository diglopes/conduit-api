const validator = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req)
    next()
  } catch (error) {
    res.status(422).json({ status: 422, error: error.errors })
  }
}

module.exports = validator
