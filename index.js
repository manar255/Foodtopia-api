const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Sequelize = require('sequelize')

const authRouter = require('./routers/authRouter')
const { error } = require('console')

const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

require('dotenv').config();
app.use(bodyParser.json());
app.use(cors());


const PORT = process.env.PORT || 4000;

const DB = process.env.DATABASE;


//use static file as css javascript images
// app.use('/static', express.static(path.join(__dirname, 'public')))


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

