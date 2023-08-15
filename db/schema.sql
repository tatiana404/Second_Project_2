DROP DATABASE IF EXISTS inventory_db;
Create DATABASE inventory_db;

USE inventory_db;

CREATE TABLE users (
    id CHAR(36) PRIMARY KEY,
    first_name VARCHAR(15),
    last_name VARCHAR(15),
    user_location INT,
    Join_date DATETIME,
    number_follower DECIMAL,
    number_following DECIMAL,
    number_tweets DECIMAL,
    number_replies DECIMAL,
    number_likes DECIMAL,
    username VARCHAR(15)
);

CREATE TABLE posts (
    id CHAR(36) PRIMARY KEY,
    date_posted DATETIME,
    caption VARCHAR(150),
    userID CHAR(36),
    views DECIMAL,
    likes DECIMAL,
    replies DECIMAL,
    retweets DECIMAL,
    number_shares DECIMAL
);

CREATE TABLE comments (
    id CHAR(36) PRIMARY KEY,
    date_sent DATETIME,
    message_content VARCHAR(150),
    senderID CHAR(36),
    postID CHAR(36)
);

CREATE TABLE interactEvents (
    id CHAR(36) PRIMARY KEY,
    namespace VARCHAR(150),
    person CHAR(36),
    action VARCHAR(150),
    thing CHAR(36),
    expires_at DATETIME
);