const { Router } = require("express");

const posts = require("./posts");
const users = require("./users");
const comments = require("./comments");
const tags = require("./tags");
const modules = require("./modules");
const postLikes = require("./like_posts");
const commentLikes = require("./like_comments");
const loginUser = require("./login");

// AUTH 
// const login = require('./loginGithub')

const router = Router();


router.use("/posts", posts);
router.use("/users", users);
router.use("/tags", tags);
router.use("/modules", modules);
router.use("/comments", comments);
router.use("/post_likes", postLikes);
router.use("/comment_likes", commentLikes);
router.use("/login_user", loginUser);

router.use("/", (req, res) => {
  res.status(200).send({ message: "Ruta principal conectada exitosamente" });
});

module.exports = router;
