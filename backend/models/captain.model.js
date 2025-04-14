const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "Firstname should be at least 3 characters long"]
        },
        lastname: {
            type: String,
            minlength: [3, "Lastname should be at least 3 characters long"]
        }
    },
    email:{
        type: String,
        unique: true,
        required: true,
        minlength: [5, "email must be 5 charachters long"]
    },
    password:{
        type:String,
        required: true,
        select: false,
    },
    socketId:{
        type: String,
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    }, 
    vehicle:{
        color:{
            type:String,
            required: true,
            minlength: [3, "Color must be 3 charachters long"]
        },
        plate:{
            type: String,  // Add 'type'
            required: true,
            minlength: [3, "Plate Number must be 3 charachters long"]
        },
        capacity:{
            type:Number,
            required:true,
            min: [1, 'Capacity must be atleast 1']
        },
        vehicleType:{
            type:String,
            enum:['Car', 'Motorcycle', 'Auto']
        }
    },
    location:{
        lat:{
            type: Number
        },
        lng:{
            type: Number
        }
    }

})
captainSchema.methods.generateAuthToken = function(){
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not set in the environment variables.");
    }
    const token = jwt.sign({ _id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;