require("dotenv").config();
const { Router } = require("express");
const { Login, getUser } = require("../controllers/Login");
const router = Router();

router.get("/", Login);
router.get("/get_user", getUser);

module.exports = router;
