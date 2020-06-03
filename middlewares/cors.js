function cors() {
  return (req, res, next) => {
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Origin", "*");

    next();
  };
}

module.exports = cors;
