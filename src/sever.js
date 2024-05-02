const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const port = process.env.PORT
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')


app.use(express.json());
app.use(express.urlencoded({extended: true}));

configViewEngine(app)







app.use('/', webRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})