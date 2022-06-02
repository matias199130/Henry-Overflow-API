const { Router } = require('express');
const { updateLikeComment, getLikeComment } = require('../controllers/Like_comment');
const { validateToken } = require('../middleware');


const router = Router();

router.put('/:idComment', validateToken, updateLikeComment );
router.get('/:idComment', validateToken, getLikeComment);

module.exports = router