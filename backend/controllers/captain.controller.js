const captainModel = require('../models/captain.model')
const { validationResult } = require('express-validator');
const captainService = require('../services/captain.service');
const { castObject } = require('../models/user.model');
const blacklistTokenModel = require('../models/blacklistToken.model')

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;
    //
    const isCaptainAlreadyRegistered = await captainModel.findOne({email})
    if(isCaptainAlreadyRegistered){
        return res.status(400).json({message: 'captain already registered'})
    }

    const hashPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname, lastname: fullname.lastname, email, password: hashPassword, 
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    })
    const token = captain.generateAuthToken();
    res.status(201).json({token, captain})
}
module.exports.loginCaptain = async(req, res, next) =>{
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
        const captain = await captainModel.findOne({ email }).select("+password");
        if (!captain) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Validate password
        const isMatch = await captain.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = captain.generateAuthToken();

        res.cookie('token', token) // added without using headers it will help to show the logged in user

        res.status(200).json({ captain, token });
    } catch (error) {
        next(error);
    }
}

module.exports.getCaptainProfile = async(req, res, next) =>{
    res.status(200).json({captain: req.captain})
}

module.exports.logoutCaptain = async(req, res, next) =>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];
    await blacklistTokenModel.create({token})    
    res.clearCookie('token')
    res.status(200).json({message: 'Logged Out'});
}