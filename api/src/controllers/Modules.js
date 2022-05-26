const { Module, Tag } = require('../db')

const getAllModules = async(req, res, next) => {
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
}

module.exports = {
    getAllModules
}