
// userRoutes
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/register', [
    body('email').isEmail().withMessage('invalid email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('Firstname will be atleast 3 charachters long'),
    body('password').isLength({min: 6}).withMessage('Password must be atleast 6 charachters long'),
], userController.registerUser)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 6}).withMessage('Password mus be 6 charachters long')
], userController.loginUser)
module.exports = router;


router.get('/profile',authMiddleware.authUser, userController.getUserProfile)