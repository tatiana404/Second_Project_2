const router = require('express').Router();
const userRoutes = require('./user-routers');
const reccRoutes = require('./recc-routes')

router.use('/users', userRoutes);
router.use('/recc', reccRoutes)

module.exports = router;
