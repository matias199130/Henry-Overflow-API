require('dotenv').config();
const { Router } = require('express');
const { getUser, postUser, updateUser, deleteUser } = require('../controllers/Users');
const router = Router();


router.get('/', getUser);
router.get('/:idUser',getUser)
router.post('/', postUser );
router.put('/:idUser', updateUser);
// router.delete('/:id', deleteUser)

module.exports = router