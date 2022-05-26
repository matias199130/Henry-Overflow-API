require('dotenv').config();
const { Router } = require('express');
const { updateComment, deleteComment, getComment, addComment } = require('../controllers/Comment');
const router = Router();
const { Comment, Post, User } = require('../db')

router.put('/:id',updateComment );
router.delete('/:id', deleteComment);
router.get('/', getComment)
router.get('/:id', getComment)
router.post('/:idPost/:idUser', addComment);

module.exports = router