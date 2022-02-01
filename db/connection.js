require('dotenv').config({path:'../.env'})

// Connect to database
const mysql = require("mysql2/promise");


const db = mysql.createConnection(
        {
            host: 'localhost',
            // Your MySQL username,
            user: process.env.MY_SQL_USERNAME,
            // Your MySQL password
            password: process.env.MY_SQL_PASSWORD,
            database: 'company'
        })


module.exports = db