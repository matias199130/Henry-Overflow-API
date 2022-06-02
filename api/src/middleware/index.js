const jwt = require("jsonwebtoken");
const { User } = require("../db");
require("dotenv").config();

// MIDDELWARE 
function validateToken(req, res, next) {
  try {
    const accessToken = req.headers['authorization'];
    if(!accessToken) res.status(403).send('Access denied');
  
    jwt.verify(accessToken, process.env.SECRET, (err, idUser) => {
        if(err) {
            return res.send('Access denied, token expired or incorrect');
        } else {
            const user = User.findByPk(idUser)
            if(!user) res.status(404).send('User not exist')
            req.idUser = idUser  
            next()
        }
    });
  } catch (error) {
    next(error)
  }
}

const isAdmin = async (req, res, next) => {
  try {
    let user = await User.findByPk(req.idUser);
    if (!user.isAdmin) {
      return res.status(401).send({ errorMsg: "Unauthorized content." });
    }
    next();
  } catch (error) {
    res.status(500).send({ errorMsg: error.message });
  }
};

module.exports = {
  validateToken,
  isAdmin
};
