const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const userRoutes = require('./routes/user.routes')
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const connectToDb = require('./db/db')
connectToDb();
app.use(cors());


app.get('/', (req, res) =>{
    res.send('hello works')
})

app.use('/users', userRoutes);

module.exports = app;