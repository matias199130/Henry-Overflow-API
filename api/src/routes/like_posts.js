require('dotenv').config();
const { Router } = require('express');
// const {  } = require('../controllers/Comment');
const { Post, User, Like_post } = require('../db');
const router = Router();

router.put('/:idPost/:idUser', async (req, res, next) => {
    const { idPost, idUser } = req.params
    try {
        const likeInPost = await Post.findByPk(idPost, { include: [User] })
        const likedBy = await User.findByPk(idUser)

        const exist = await Like_post.findAll({
            where: {
                userId: idUser,
                postId: idPost
            }
        })
        if(!exist.length) {
            const newLike = await Like_post.create();
            likeInPost.addLike_post(newLike)
            likedBy.addLike_post(newLike)
            // const countLikes = await likeInPost.countLike_posts()
            // console.log(countLikes)
            return res.send("Like")
        } else {
            likeInPost.removeLike_post(exist)
            likedBy.removeLike_post(exist)
            // const countLikes = await likeInPost.countLike_posts()
            // console.log(countLikes)
            return res.send("Dislike")
        }

    } catch (error) {
        next(error)
    }
});

router.get('/:idPost', async (req, res, next) => {
    const { idPost } = req.params
    try {
        const likeInPost = await Post.findByPk(idPost)
        const countLikes = await likeInPost.countLike_posts()

        res.json(countLikes)
    } catch (error) {
        next(error)
    }
});

module.exports = router