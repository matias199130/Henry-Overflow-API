const { Comment, User, Like_comment } = require('../db');

const updateLikeComment = async (req, res, next) => {
    const { idComment } = req.params
    const idUser = req.idUser
    try {
        const likeInComment = await Comment.findByPk(idComment)
        const likedBy = await User.findByPk(idUser);
        
        

        const exist = await Like_comment.findAll({
            where: {
                userId: idUser,
                commentId: idComment
            }
        })
        if(!exist.length) {
            const newLike = await Like_comment.create();
            
            likeInComment.addLike_comment(newLike)
            likedBy.addLike_comment(newLike)           
            return res.send("Like")
        } else {
            likeInComment.removeLike_comment(exist)
            likedBy.removeLike_comment(exist)            
            return res.send("Dislike")
        }

    } catch (error) {
        next(error)
    }
};

const getLikeComment = async (req, res, next) => {
    const { idComment } = req.params
    try {
        const likeInComment = await Comment.findByPk(idComment)
        const countLikes = await likeInComment.countLike_comments()
        res.json(countLikes)
    } catch (error) {
        next(error)
    }
};

module.exports = {
    updateLikeComment,
    getLikeComment
}