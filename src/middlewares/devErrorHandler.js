function devErrorHandler () {
  return (err, req, res, next) => {
    console.log(err.stack)
    res.status(err.status || 500)

    res.json({
      errors: {
        message: err.message,
        error: err
      }
    })
  }
}

module.exports = devErrorHandler
