const express = require('express');

const router = express.Router();
const authorController = require("../controllers/authorController")
const blogController = require("../controllers/clientController")
const loginController = require("../controllers/logincontroller")
const middleWare = require("../middleware/middleWare")

router.post('/createAuthor', authorController.createAuthor);
router.post('/login', loginController.login);
router.post('/createBlogs', middleWare.auth, blogController.createBlogs);
module.exports = router;