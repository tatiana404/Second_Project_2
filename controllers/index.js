const router = require('express').Router();

// import recommendations from recc.js
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const loginRoutes = require("./login-routes");
const signupRoutes = require("./signup-routes");

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use("/signup", signupRoutes);
router.use("/login", loginRoutes);

module.exports = router;