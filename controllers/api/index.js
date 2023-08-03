const router = require('express').Router();
const userRoutes = require('./user-routers');

router.use('/users', userRoutes);

module.exports = router;
