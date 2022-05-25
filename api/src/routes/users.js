require('dotenv').config();
const { Router } = require('express');
const router = Router();
const { User } = require('../db')

router.get('/', async(req, res, next) => {
    try {
        const response = await User.findAll()
        res.json(response)
    } catch (error) {
        next(error)
    }
});

router.post('/', async(req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser)
    } catch (error) {
        next(error)
    }
});

module.exports = router