const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectdb = require('./config/db')
const port = process.env.PORT || 5000

connectdb()

const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});