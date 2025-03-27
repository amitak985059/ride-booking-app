const blacklistTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req, res, next) => {
    try {
        // Ensure req.headers.authorization exists before splitting
        const token = req.cookies.token || (req.headers.authorization && req.headers.authorization?.split(' ')[1]);

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        const isBlackListed = await blacklistTokenModel.findOne({ token: token });

        if(isBlackListed){
            return res.status(401).json({message: 'Unauthorised'})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized: User not found' });
        }

        req.user = user;
        next();
    } catch (err) {
        console.error('Authentication Error:', err.message);
        return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
    }
};

module.exports.authCaptain = async(req, res, next)=>{
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization?.split(' ')[1]);

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const isBlackListed = await blacklistTokenModel.findOne({ token: token });

    if(isBlackListed){
        return res.status(401).json({message: 'Unauthorised'})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain  = await captainModel.findById(decoded._id);
        req.captain = captain
        return next();
    } catch (error) {
        res.status(401).json({message: 'Unauthorised'})
    }

}