const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Sequelize = require('sequelize')
const swaggerSpec = require('./Swagger/swaggerConfig.js')
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const authRouter = require('./routes/authRouter.js')

const PORT = process.env.PORT || 4000;

const DB = process.env.DATABASE;

const app = express()


app.use(bodyParser.json());
app.use(cors());




//Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/auth', authRouter)




const sequelize = new Sequelize(DB)

sequelize.authenticate().then(() => {

    console.log('Connection has been established successfully.');
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}).catch(error => {

    console.error('Unable to connect to the database:', error);
})

