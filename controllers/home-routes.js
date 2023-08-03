const router = require('express').Router();
const { User } = require('../models');
// router.get('/', (req, res) => {
//   console.log('Connect from home-routes')
//   //res.render('all');
//   //res.sendFile(path.join(__dirname, '../views/layouts'));
//   res.render('login')
//   // res.sendStatus(200)
// });

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['first_name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  console.log(req)
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;