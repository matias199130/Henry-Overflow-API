require('dotenv').config();
const { Router } = require('express');
const {  } = require('../controllers/Comment');
const router = Router();

router.post('/:idComment/:idUser', (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
});

module.exports = router