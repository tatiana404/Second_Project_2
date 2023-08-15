const router = require('express').Router();

const { yearInFuture } = require('../../helpers/dateHelpers');

const { interactEvent } = require('../../models');

router.post("/", async (req, res) => {
    try {
        const dbInteractEvent = await interactEvent.create({
            id,
            person: req.body.userID,
            namespace:'Post',
            thing: req.body.thing,
            action: req.body.action,
            expires_at: yearInFuture()
        });
        res.status(200)
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    //pull event data for a given userID?
    //need all events to make a recommendation
    //take data and feed into recc script

    try {
        const events = await interactEvent.findAll()
        return events
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})

module.exports = router;