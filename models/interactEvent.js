const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const User = require('./User');
const Post = require('./Post')

class interactEvent extends Model {
    static associate() {
        this.belongsTo(User, {foreignKey: 'person', as: 'user' })

        this.belongsTo(Post, {foreignKey: 'thing', as: 'Post' })

    }
};

interactEvent.init(
    {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        namespace:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        person: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        thing: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        action:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        expires_at: {
            type: DataTypes.DATE,
            allowNull: false, 
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'interactEvents', 
    }
);

module.exports = interactEvent;
