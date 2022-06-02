
const { Router } = require('express');
const router = Router();
const { addPost, getPost, deletePost, updatePost } = require('../controllers/Post');
const { validateToken } = require('../middleware');
 

router.get('/', validateToken, getPost);
router.get('/:idPost', validateToken, getPost)
router.post('/', validateToken, addPost)
router.put('/:idPost', validateToken, updatePost)
router.delete('/:idPost', validateToken, deletePost)


module.exports = router