require('dotenv').config();
const { Router } = require('express');
const router = Router();
const { Module, Tag } = require('../db')


router.get('/', async(req, res, next) => {
    try {
        const response = await Module.findAll({
            include: {
                model: Tag,
                attributes: { exclude: ['moduleId'] }
            }
        })
        res.json(response)
    } catch (error) {
        next(error)
    }
});

module.exports = router