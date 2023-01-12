// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, 
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)

//MODEL
class Stage extends Model{}
Stage.init({
    stage_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    stage_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stage',
    timestamps: false
})

//EXPORT
module.exports = Stage