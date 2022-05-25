const { Post, Tag, User, Comment} = require('../db');


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