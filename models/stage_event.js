// DEPENDENCIES
const { Sequelize, DataTypes,  Model, Deferrable } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)
const Event = require('./event.js')
const Stage = require('./stage.js')

// MODEL
class StageEvent extends Model{}
StageEvent.init({
    stage_event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    stage_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Stage,
            key: 'stage_id',
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
    }
},{
    sequelize,
    modelName: 'StageEvent',
    tableName: 'stage_event',
    timestamps: false
})

//EXPORT
module.exports = StageEvent