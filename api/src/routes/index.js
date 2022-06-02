const { Router } = require('express');

const posts = require('./posts')
const users = require('./users')
const comments = require('./comments')
const tags = require('./tags')
const modules = require('./modules')

// AUTH 
// const login = require('./loginGithub')

const router = Router();

router.use('/posts', posts)
router.use('/users', users)
router.use('/tags', tags)
router.use('/modules', modules)
router.use('/comments', comments)
// router.use('/login', login)


// router.use('/', (req, res) => {
//     res.status(200).send({message: "Ruta principal conectada exitosamente"})
// })

module.exports = router;
