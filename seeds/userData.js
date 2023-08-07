const { User } = require('../models');

const userdata =[
  {
    "id": "0001",
    "first_name": "Dan",
    "last_name": "Balan",
    "user_location": "-104.9847, 39.73915",
    "Join_date": "Wed Aug 05 05:46:48 +0000 2009",
    "number_follower": "9.759",
    "number_following": "1.759",
    "number_tweets": "1.111",
    "number_replies": "1.211",
    "number_likes": "1.311",
    "email": "dan@gmail.com",
    "password": "password12345"
  },
  {
    "id": "0002",
    "first_name": "Daniel",
    "last_name": "Stern",
    "user_location": "-104.9847, 39.73915",
    "Join_date": "Wed Aug 05 05:46:48 +0000 2009",
    "number_follower": "9.759",
    "number_following": "1.759",
    "number_tweets": "1.111",
    "number_replies": "1.211",
    "number_likes": "1.311",
    "email": "daniel@gmail.com",
    "password": "password12345"
  },
  {
    "id": "0003",
    "first_name": "Michael",
    "last_name": "Vern",
    "user_location": "-104.9847, 39.73915",
    "Join_date": "Wed Aug 05 05:46:48 +0000 2009",
    "number_follower": "9.759",
    "number_following": "1.759",
    "number_tweets": "1.111",
    "number_replies": "1.211",
    "number_likes": "1.311",
    "email": "vern@gmail.com",
    "password": "password12345"
  },
]

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
