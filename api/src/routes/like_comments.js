const { Router } = require('express');
const { updateLikeComment, getLikeComment } = require('../controllers/Like_comment');


const router = Router();

router.put('/:idComment/:idUser', updateLikeComment );
router.get('/:idComment', getLikeComment);

module.exports = router