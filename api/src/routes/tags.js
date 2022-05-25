require('dotenv').config();
const { Router } = require('express');
const router = Router();
const { Module, Tag } = require('../db')

router.get('/', async(req, res, next) => {
    try {
        const response = await Tag.findAll({include: [Module]})
        res.json(response)
    } catch (error) {
        next(error)
    }
});

module.exports = router