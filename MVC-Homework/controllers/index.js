const router = require('express').Router();
const userRoutes = require('./userRoutes'); // might have to use'-' in between
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;
