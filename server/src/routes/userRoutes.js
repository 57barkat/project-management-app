const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

router.get('/', protect, userController.getAllUsers);

module.exports = router;
