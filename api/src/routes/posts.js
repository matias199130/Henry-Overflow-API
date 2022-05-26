
const { Router } = require('express');
const router = Router();
const { addPost, getPost, deletePost, updatePost } = require('../controllers/Post');
 

router.get('/', getPost);
router.post('/:idUser', addPost)
router.get('/:idPost', getPost)
router.put('/:idPost', updatePost)
router.delete('/:idPost', deletePost)


module.exports = router