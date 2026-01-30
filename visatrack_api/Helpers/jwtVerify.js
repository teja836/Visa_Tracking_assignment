const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const jwtVerify = (req, res, next) => {
  const token = req.header(process.env.JWT_HEADER_KEY);
  try {
    const verify = jwt.verify(token, process.env.JWT_SECKEY);
    if (verify) {
      req.verifiedUser = verify;
      next();
    } else {
      return res.json({
        status: false,
        message: "Invalid Token, Try Again!",
      });    
    }
  } catch (error) {
    return res.json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = jwtVerify;
