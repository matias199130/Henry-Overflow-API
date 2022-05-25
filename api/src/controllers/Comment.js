const { Post, Tag, User, Comment} = require('../db');

const getComment = (req, res, next) => {
    const id = req.params.id;

         Comment.findAll({
            include: [
                {
                model: Post,
                attributes: ["title", "id"],
                through: {
                    attributes: []
                }
                },                
                {                    
                model: User,
                attributes: ["first_name", "last_name", "id"],                 
                }       
            ]
        }).then(comment => {
            if(id){
                let commentId = comment.filter(el => el.id == id);
                commentId.length ? res.status(200).send(commentId) : res.status(400).send("Comment not found")
            } 
            
           return  res.send(comment)})
        .catch(error => next(error))
    
}


const updateComment = (req, res, next) => {
    const id = req.params.id;
    const {message, rating} = req.body;
    return Post.update(
        {message, rating},{
            where: {id},  raw : true 
        },
    ).then(updatedComment => res.send(updatedComment))
    .catch(error => next(error))
}

const deleteComment = (req, res, next) => {
    const id = req. params.id;
    return Comment.destroy({
        where: {
            id
        }
    }).then(() => {res.status(200).send("Comment deleted successfully")})
    .catch(error => next(error))
}

module.exports = {
    updateComment,
    deleteComment
}