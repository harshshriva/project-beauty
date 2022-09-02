const express = require('express');

const router = express.Router();
const authorController = require("../controllers/authorController")
const loginController = require("../controllers/logincontroller")
const stringnagram = require("../controllers/stringAnagram")

router.post('/createAuthor', authorController.createAuthor);
router.post('/login', loginController.login);
router.post('/stringAnagram', stringnagram.checkStringsAnagram);


module.exports = router;