// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize');

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//DB Connection
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, 
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);
const testSequelize = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
testSequelize();

app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})