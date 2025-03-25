const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.DB_URI, console.log('mongodb connected successfully')).catch(err => console.log(err))
}

module.exports = connectToDb;