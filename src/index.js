const dotenv = require('dotenv/config')
const express = require('express')
const morgan = require('morgan')

const taskRoutes = require('./routes/tasks.routes')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(taskRoutes)

app.listen(4000)
console.log('server on port 4000')