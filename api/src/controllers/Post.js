
const { Post, Tag, User, Comment} = require('../db');

const getPost = (req, res, next) => {
   
        Post.findAll({
            include: {
                model: Tag,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
        }).then(post => res.send(post))
        .catch(error => next(error))
    
}

const addPost = async (req, res, next) => {
    try {
        const {title, message, rating, tag} = req.body;
    const postCreated = await Post.create({
        title, message, rating
    })
    // const tags = await Tag.findAll({
    //     where: {
    //         name : tag
    //     }
    // })
   //postCreated.addTag(tags);
    res.send("Post done successfully")
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getPost, 
    addPost
}