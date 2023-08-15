const g = require('ger')

const esm = new g.MemESM()

const ger = new g.GER(esm);

//const interactEvent = require('../models/interactEvent')

const { yearInFuture, } = require('../helpers/dateHelpers')

testEvents = [
    {
        namespace: 'posts',
        person: "0001",
        action:  'like',
        thing:  "1234",
        expires_at: yearInFuture(),
    },
    {
        namespace: 'posts',
        person: "0002",
        action:  'like',
        thing:  "1234",
        expires_at: yearInFuture(),
    },
    {
        namespace: 'posts',
        person: "0001",
        action:  'like',
        thing:  "1233",
        expires_at: yearInFuture(),
    },
]

//  collect data - like, repost, share
//  in frontend scripts, on like, repost, or share, send an event to ger.events?
//  feed to recommender
//  get recommendations (tags: assign a tag to every post and use the as a'thing')
//  user self assign tags?
//  recommends 'things'/ tags. or 'things' as post uuid???? 
//  script to assign recommended tweets
//  display recommendations and random posts if there arent enough

ger.initialize_namespace('posts')
.then(() => {
    return ger.events(testEvents)
})
.then(() => {
    // test userID
    userID = "0002"
    
    return ger.recommendations_for_person('posts',userID, {
        'actions': {
            'like': 1,
            'comment': 3,
        }
    })
})
.then((recommendations) => {
    console.log("\nRecommendations For '0002'")
    console.log(JSON.stringify(recommendations,null,2))
})