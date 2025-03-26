// user.controller
const { use, router } = require('../app');
const userModel = require('../models/user.model')
const userService = require('../services/user.service')
const { validationResult } = require('express-validator');


module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
   

    const { fullname, email, password } = req.body;

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