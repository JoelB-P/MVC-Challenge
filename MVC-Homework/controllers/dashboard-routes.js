const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
  const posts = postData.map((post) => post.get({ plain: true}));
  res.render('home', { 
    layout: 'dashboard',
    post,
  });
} catch (err) {
  res.redirect('login');
}
});

router.get('/new', withAuth, (req, res) => {
  res.render('home', { 
    layout: 'dashboard', 
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk('????');
    if (postData) {
      const post =postData({ plain: true });
      res.render('home', { 
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;