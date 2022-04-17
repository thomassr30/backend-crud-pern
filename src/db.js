
const {Pool} = require('pg')


const pool = new Pool({
    user: 'postgres',
    password: process.env.PASSWORD_DB,
    host: 'localhost',
    port:5432,
    database: 'tasksdb'
})

module.exports = pool