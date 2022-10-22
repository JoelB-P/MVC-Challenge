const router = require('express').Router();
const userRoutes = require('./user-Routes'); 
const postRoutes = require('./post-Routes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;
