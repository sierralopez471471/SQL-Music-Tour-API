// DEPENDENCIES
const { Sequelize, DataTypes,  Model, Deferrable } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)
const Band = require('./band.js')
const Event = require('./event.js')

// MODEL
class MeetGreet extends Model{}
MeetGreet.init({
    meet_greet_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    band_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Band,
            key: 'band_id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    event_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Event,
            key: 'event_id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    meet_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    meet_end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'MeetGreet',
    tableName: 'meet_greet',
    timestamps: false
})

//EXPORT
module.exports = MeetGreet