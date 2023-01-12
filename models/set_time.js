// DEPENDENCIES
const { Sequelize, DataTypes,  Model, Deferrable } = require('sequelize')
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, 
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)
const Band = require('./band.js')
const Event = require('./event.js')
const Stage = require('./stage.js')

// MODEL
class SetTime extends Model{}
SetTime.init({
    set_time_id: {
        type: DataTypes.INTEGER,
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
    stage_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Stage,
            key: 'stage_id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'SetTime',
    tableName: 'set_time',
    timestamps: false
})

//EXPORT
module.exports = SetTime