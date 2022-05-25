
const { Router } = require('express');
const router = Router();
const { addPost, getPost, deletePost, updatePost } = require('../controllers/Post');
 

router.get('/', getPost);
//router.get('/:id', allPokemon)
router.post('/', addPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)


module.exports = router