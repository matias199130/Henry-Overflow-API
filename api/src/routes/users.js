require('dotenv').config();
const { Router } = require('express');
const { getUser, logintUser, updateUser } = require('../controllers/Users');
const { validateToken } = require('../middleware');
const router = Router();


router.post('/', logintUser );
router.get('/', validateToken,getUser);
// router.get('/:idUser', validateToken, getUser)
router.put('/', validateToken, updateUser);

module.exports = router