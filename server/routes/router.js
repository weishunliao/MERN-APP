const Controllers = require('../controllers/controller');
const express = require('express');
const router = express.Router();

router.get('/users', Controllers.getUsers);
router.post('/signUp', Controllers.createUser);
router.get('/users/:name', Controllers.getUserByName);
router.get('/articles', Controllers.getArticles);
router.get('/details', Controllers.getDetails);
router.get('/details/:id', Controllers.getDetailsByID);
router.get('/populars', Controllers.getPopulars);
router.get('/suggestions', Controllers.getSuggestions);
router.post('/login', Controllers.auth);

module.exports = router;