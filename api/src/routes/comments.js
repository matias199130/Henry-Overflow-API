require('dotenv').config();
const { Router } = require('express');
const { updateComment, deleteComment, addComment } = require('../controllers/Comment');
const { validateToken } = require('../middleware');
const router = Router();

router.put('/:idComment', validateToken, updateComment);
router.delete('/:idComment', validateToken, deleteComment);
router.post('/:idPost', validateToken, addComment);
// router.get('/', getComment)
// router.get('/:id', getComment)

module.exports = router