const express = require('express');
const { createUser } = require('../controllers/user/userController');
const router = express.Router();

router.post('/users', createUser);

module.exports = router;
