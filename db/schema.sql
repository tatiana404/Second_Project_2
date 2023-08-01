DROP DATABASE IF EXISTS inventory_db;
Create DATABASE inventory_db;

USE inventory_db;

CREATE TABLE user (
    id INT PRIMARY KEY
    first_name VARCHAR(15)
    last_name VARCHAR(15)
    user_location INT
    Join_date
    number_follower DECIMAL
    number_following DECIMAL 
    number_tweets DECIMAL
    number_replies DECIMAL
    number_likes DECIMAL
)

CREATE TABLE posts (
    id INT PRIMARY KEY
    date_posted 
    caption VARCHAR(150)
    views DECIMAL
    likes DECIMAL
    replies DECIMAL
    retweets DECIMAL
    number_shares DECIMAL
)

CREATE TABLE messages (
    id INT PRIMARY KEY
    date_sent 
    message_content VARCHAR(150)
    sender_username INT 
    receiver_username INT 
)