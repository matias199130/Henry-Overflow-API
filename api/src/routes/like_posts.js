
const { Router } = require('express');
const { updateLikePost, getLikePost } = require('../controllers/Like_posts');

const router = Router();

router.put('/:idPost/:idUser', updateLikePost);
router.get('/:idPost', getLikePost);

module.exports = router