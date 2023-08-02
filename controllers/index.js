const router = require('express').Router();

// import recommendations from recc.js

const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

module.exports = router;