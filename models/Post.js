const {Model, DataTypes} = require("sequelize")
const sequelize = require("../config/connection")

class Post extends Model {};

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    caption: {
      type: DataTypes.STRING,
    },
    views: {
      type: DataTypes.DECIMAL,
    },
    likes: {
      type: DataTypes.DECIMAL,
    },
    replies: {
      type: DataTypes.DECIMAL,
    },
    //   retweets: {
    //     type: DataTypes.DECIMAL,
    //   },
    //   number_shares: {
    //     type: DataTypes.DECIMAL,
    //   },
    //   img: {
    //     type: Buffer,
    //   },
    //   vid: {
    //     type:
    //   }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Post",
  }
)

module.exports = Post
