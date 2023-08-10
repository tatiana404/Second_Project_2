const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { yearInFuture, } = require('../helpers/dateHelpers');
const User = require('./User');

class interactEvent extends Model {
    constructor() {
        this.id;
        this.namespace = 'post',
        this.person = `${userID}`,
        this.action = ['like','repost','share'],
        this.thing = `${postID}`,
        this.expires_at = yearInFuture()
    }
};

interactEvent.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        namespace:{
            type: DataTypes.STRING,
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

interactEvent.belongsTo(User, {
    person: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = interactEvent