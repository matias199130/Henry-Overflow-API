
const { Router } = require('express');
const { updateLikePost, getLikePost } = require('../controllers/Like_posts');
const { validateToken } = require('../middleware');

const router = Router();

router.put('/:idPost', validateToken, updateLikePost);
router.get('/:idPost', validateToken, getLikePost);

module.exports = router