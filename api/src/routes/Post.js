
const { Router } = require('express');
const router = Router();
const { addPost, getPost } = require('../controllers/Post');
 

router.get('/', getPost);
//router.get('/:id', allPokemon)
router.post('/', addPost)
//router.delete('/:id', pokemonDelete)


module.exports = router