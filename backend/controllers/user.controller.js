// user.controller
const { use, router } = require('../app');
const userModel = require('../models/user.model')
const userService = require('../services/user.service')
const { validationResult } = require('express-validator');

const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    

    const { fullname, email, password } = req.body;
    const isUserAlready = await userModel.findOne({email})
    if(isUserAlready){
        return res.status(400).json({message: 'user already registered'})
    }

    const hashPassword = await userModel.hashPassword(password);


    const user = await userService.createUser({
        firstname: fullname.firstname, lastname: fullname.lastname, email, password: hashPassword
    })

    const token = user.generateAuthToken();

    res.status(201).json({user, token})

}
module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        // Check if user exists
        const user = await userModel.findOne({ email }).select("+password");
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Validate password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = user.generateAuthToken();

        res.cookie('token', token) // added without using headers it will help to show the logged in user

        res.status(200).json({ user, token });
    } catch (error) {
        next(error);
    }
};

module.exports.getUserProfile = async (req, res, next) =>{
    res.status(200).json(req.user)
}
module.exports.logoutUser = async (req, res, next) =>{
    res.clearCookie('token')
    const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];
    await blacklistTokenModel.create({token})

    res.status(200).json({message: 'Logged Out'});
}