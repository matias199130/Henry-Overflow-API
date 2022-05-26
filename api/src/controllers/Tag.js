const { Tag } = require('../db')


const getAllTags = async(req, res, next) => {
    try {
        const response = await Tag.findAll()
        res.json(response)
    } catch (error) {
        next(error)
    }
};

module.exports = {
    getAllTags
}