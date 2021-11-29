const express = require('express');
const router = express.Router();
const { getHomePage, saveData } = require('../controllers/homePage');


router.get('/', getHomePage)
router.post('/form', saveData)

module.exports = router;
