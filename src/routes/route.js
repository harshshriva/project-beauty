const express = require('express');

const router = express.Router();
const authorController = require("../controllers/authorController")
const loginController = require("../controllers/logincontroller")


router.post('/createAuthor', authorController.createAuthor);
router.post('/login', loginController.login);

module.exports = router;