const express = require('express');

const router = express.Router();
// // const authorController = require("../controllers/authorController")
// const loginController = require("../controllers/logincontroller")
const CategoriesCont = require("../controllers/categoriesCont")

// router.post('/createAuthor', authorController.createAuthor);
// router.post('/login', loginController.login);
router.get('/createget', CategoriesCont.get);
router.post('/categoryCreate', CategoriesCont.categoryCreate);
module.exports = router;