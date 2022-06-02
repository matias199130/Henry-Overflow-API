const request = require("superagent");
const axios = require("axios");

const Login = async (req, res, next) => {
  const { code } = req.query;

  if (!code) {
    res.send({
      success: false,
      message: "Error: no code",
    });
  }

  /*  REACT_APP_CLIENT_ID=29c214f0eabafdd69c0c
REACT_APP_CLIENT_SECRET=7b87857ce545b2c2a38ce9e8f34cf7ccf0f55973 */

  axios
    .post("https://github.com/login/oauth/access_token", {
      client_id: "29c214f0eabafdd69c0c",
      client_secret: "7b87857ce545b2c2a38ce9e8f34cf7ccf0f55973",
      code: code,
    })
    .then((response) => {
      res.send(response.data);
    });
};

const getUser = async (req, res, next) => {
  const accessToken = "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";

  axios
    .get("https://api.github.com/user", {
      headers: { Authorization: "token " + accessToken },
    })
    .then((response) => {
      res.json(response.data);
    });
};

module.exports = {
  Login,
  getUser,
};
