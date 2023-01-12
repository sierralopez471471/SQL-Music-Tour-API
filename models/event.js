// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

//MODEL
class Event extends Model{}
Event.init({
    event_id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Event',
    tableName: 'event',
    timestamps: false
})

//EXPORT
module.exports = Event