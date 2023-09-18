const jwt = require('jsonwebtoken');
const Db = require('../models/index');
const User = Db.User
const {secret} = require('./secret')

authorize = (req, res, next) => {

    if(!req.headers.authorization){
        return res.status(401).json({message: "Unauthorized"})
    }

    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, secret, (error, decoded)=> {
        if(error){
            return res.status(401).json({message: error.message});
        }
        req.id = decoded;
        User.findByPk(decoded.id)
            .then((user) => {
                if(!user){
                    return res.status(401).json({message: "User not found"});
                }
                next();
            })
    })
}

module.exports = authorize;
