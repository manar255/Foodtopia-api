const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const swaggerSpec = require('./Swagger/swaggerConfig.js')
const sequelize = require('./config/database.js')
const index = require('./models/Index.js')

const authRouter = require('./routes/authRouter.js')
const { error } = require('console')

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


app.use('/category',require('./routes/categoryRouter.js'))
app.use('/item',require('./routes/itemRouter.js'))
app.use('/offer',require('./routes/offerRouter.js'))
app.use('/cart',require('./routes/cartRouter.js'))
app.use('/favorite',require('./routes/favoriteRouter.js'))

// app.use('/order',require('./routes/orderRouter.js'))

//Error handling 
app.use((error, req, res, next) => {
    console.error(error);
    const status = error.status || 500;
    const message = error.message || 'Internal Server Error';
    res.status(status).json({ message });
});



sequelize.authenticate().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
    console.log('Connection has been established successfully.');

}).catch(error => {

    console.error('Unable to connect to the database:', error);
})




