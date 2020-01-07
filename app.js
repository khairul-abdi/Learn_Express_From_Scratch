const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3000
const indexRouter = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

app.use('/', indexRouter)

// app.use(app.router)
// routes.initialize(app)

app.listen(port, () => console.log(`Server is running on port ${port}`))