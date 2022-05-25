
const { Post, Tag, User, Comment} = require('../db');

const getPost = (req, res, next) => {
    const id = req.params.id;
    const name = req.query.name;

         Post.findAll({
            include: [
                {
                model: Tag,
                attributes: ["name", "id"],
                through: {
                    attributes: []
                }
                },
                {
                model: Comment,
                attributes: ["message"],
                },
                {                    
                model: User,
                attributes: ["first_name", "last_name", "id"],               
                
                }       
            ]
        }).then(post => res.send(post))
        .catch(error => next(error))
    
}

const addPost = async (req, res, next) => {
    try {
        const  {commentId, userId} = req.params;
        const {title, message, rating, tag} = req.body;
        const postCreated = await Post.create({
        title, message, rating
        })
        const tags = await Tag.findAll({
            where: {
                name : tag
            }
        })
        const comment = await Comment.findByPk(commentId);
        comment.addUser(userId)

   postCreated.addTag(tags);
    res.send("Post done successfully")
    } catch (error) {
        next(error)
    }
}

const updatePost = (req, res, next) => {
    const id = req.params.id;
    const {title, message, rating, tag} = req.body;
    return Post.update(
        {title, message, rating, tag},{
            where: {id},  raw : true 
        },
    ).then(updatedPost => res.send(updatedPost))
    .catch(error => next(error))
}

const deletePost = (req, res, next) => {
    const id = req. params.id;
    return Post.destroy({
        where: {
            id
        }
    }).then(() => {res.status(200).send("post deleted successfully")})
    .catch(error => next(error))
}

module.exports = {
    getPost, 
    addPost,
    updatePost,
    deletePost
}