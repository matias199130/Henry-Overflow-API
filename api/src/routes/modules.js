require('dotenv').config();
const { Router } = require('express');
const router = Router();
const { getAllModules } = require('../controllers/Modules')
const { validateToken } = require('../middleware');


router.get('/', validateToken, getAllModules);

module.exports = router