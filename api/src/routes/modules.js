require('dotenv').config();
const { Router } = require('express');
const router = Router();
const { getAllModules } = require('../controllers/Modules')


router.get('/', getAllModules);

module.exports = router