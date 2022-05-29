require('dotenv').config();
const { Router } = require('express');
// const {  } = require('../controllers/Comment');
const { Post, User, Like_post } = require('../db');
const router = Router();

router.post('/:idPost/:idUser', async (req, res, next) => {
    const { idPost, idUser } = req.params
    try {
        const likeInPost = await Post.findByPk(idPost, { include: [User] })
        const likedBy = await User.findByPk(idUser)

        const newLike = await Like_post.create();
        // console.log(newLike.__proto__);
        console.log("Likes_post :", newLike.__proto__)
        console.log("Post :", likeInPost.__proto__)
        // console.log("User :", likedBy.__proto__)
        likeInPost.addLike_post(newLike)
        newLike.createUser(likedBy)
        res.send("like exitoso!")
    } catch (error) {
        next(error)
    }
});

module.exports = router