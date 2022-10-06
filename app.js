require('dotenv').config()

const express = require('express')
const app = express()
const PORT = 6000
const mongoose = require('mongoose')

// middleware
app.use(express.json())

// connect to db
mongoose.connect(process.env.MONGODB_URI)
    .then(res => app.listen(PORT, () => {
        console.log('Port', PORT) 
        console.log('Connected to database') 
      }))
    .catch(err => {
        console.log(err)
    })
    
// routes
app.use('/books', require('./routes/bookRoutes'))

