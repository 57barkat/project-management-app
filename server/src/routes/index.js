const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const taskRoutes = require('./taskRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

router.use('/auth', authRoutes);
router.use('/tasks', taskRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;
