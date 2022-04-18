const {config} = require('dotenv')
const {Pool} = require('pg')
config()

const pool = new Pool({
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    host: process.env.HOST_DB,
    port:process.env.PORT_DB,
    database: process.env.DATABASE
})

module.exports = pool