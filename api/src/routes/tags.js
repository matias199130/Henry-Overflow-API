require('dotenv').config();
const { Router } = require('express');
const router = Router();
const { getAllTags } = require('../controllers/Tag')

router.get('/', getAllTags);

module.exports = router