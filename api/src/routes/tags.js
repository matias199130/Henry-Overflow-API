require('dotenv').config();
const { Router } = require('express');
const router = Router();
const { getAllTags } = require('../controllers/Tag')
// const {} = require('../middleware');

router.get('/', getAllTags);

module.exports = router