const router = require('express').Router();
const { User } = require('../models');
// router.get('/', (req, res) => {
//   console.log('Connect from home-routes')
//   //res.render('all');
//   //res.sendFile(path.join(__dirname, '../views/layouts'));
//   res.render('login')
//   // res.sendStatus(200)
// });
// router.get("/", async (req, res) => {
//   try {
//       const postData = await Post.findAll({
//           //joins table
//           include: [
//               {
//                   model: User,
//                   attributes: ["id", "username"],
//               },
//           ],
//           order: [["createdAt", "DESC"]],
//       });
//     } catch (err) {
//       res.status(500).json(err);
//   }
// });

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      model: User,
      attributes: ["id", "username"],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  res.render("signup", {
    loggedIn: req.session.loggedIn,
    loggedInUserData: req.session.loggedInUserData,
  });
});

module.exports = router;