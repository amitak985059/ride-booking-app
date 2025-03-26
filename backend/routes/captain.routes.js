
// captainRoutes
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller')

router.post('/register', [
    body('email').isEmail().withMessage('invalid email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('Firstname will be atleast 3 charachters long'),
    body('password').isLength({min: 6}).withMessage('Password must be atleast 6 charachters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('color must be atleast 3 charachters long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('plate must be atleast 3 charachters long'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('capacity must be atleast 1 charachters long'),
    body('vehicle.vehicleType').isIn(['Car', 'Motorcycle', 'Auto']).withMessage('Invalid')
],captainController.registerCaptain )



module.exports = router;