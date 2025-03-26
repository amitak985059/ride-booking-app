const captainModel = require('../models/captain.model')
const { validationResult } = require('express-validator');
const captainService = require('../services/captain.service');


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
        plate: vehicle.color,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    })
    const token = captain.generateAuthToken();
    res.status(201).json({token, captain})
}