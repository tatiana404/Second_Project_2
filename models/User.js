const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    number_follower: {
      type: DataTypes.DECIMAL(10, 2),
    },
    number_following: {
      type: DataTypes.DECIMAL(10, 2),
    },
    number_tweets: {
      type: DataTypes.DECIMAL(10, 2),
    },
    number_replies: {
      type: DataTypes.DECIMAL(10, 2),
    },
    number_likes: {
      type: DataTypes.DECIMAL(10, 2),
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6],
        },
    },
},
  {
    hooks: {
      async beforeCreate(newUserData) {
          newUserData.password = await bcrypt.hash(
              newUserData.password,
              10
          );
          return newUserData;
      },
  },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users',
  }
);

module.exports = User;
