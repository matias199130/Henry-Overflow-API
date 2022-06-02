require('dotenv').config();
const { Router } = require('express');
const router = Router();
const { getAllTags } = require('../controllers/Tag')
const { validateToken } = require('../middleware');

router.get('/', validateToken, getAllTags);

module.exports = router