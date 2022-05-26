require('dotenv').config();
const { Router } = require('express');
const { updateComment, deleteComment, addComment } = require('../controllers/Comment');
const router = Router();

router.put('/:idComment',updateComment);
router.delete('/:idComment', deleteComment);
router.post('/:idPost/:idUser', addComment);
// router.get('/', getComment)
// router.get('/:id', getComment)

module.exports = router