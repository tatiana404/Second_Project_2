const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { yearInFuture, } = require('../helpers/dateHelpers');
const User = require('./User');

class interactEvent extends Model {
    static associate() {
        this.belongsTo(User, {foreignKey: 'person', as: 'user' })
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
