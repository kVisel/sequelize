const db = require('../models/index');
const bcrypt = require('bcrypt');
const User = db.User;


exports.register = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const hash = bcrypt.hashSync(password, 12)

        const verify =  await User.findOne({
            where: {email: email}
        })

        if(verify){
            return res.status(401).json({message: "Utilisateur avec cet adresse mail exite deja"})
        }

        const user = await User.create({
            name,email,password: hash
        })
        return res.status(200).json({
            mesage: "Utilisateur cree",
            data: user
        })
    } catch (error) {
        return res.status(500).json({message : error});
    }
}

exports.login = async (req, res) => {
    try {

        const {email, password} = req.body;

        const user = await User.findOne({
            where:{
                email: email
            }
        })

        const match = bcrypt.compareSync(password, user.password);
        
        if(!user || !match ){
            return res.status(404).json({message : "address mail ou mot de passe incorrect"});
        }

        return res.status(200).json({
            mesage: "Connexion avec succes",
            data: user
        })
    } catch (error) {
        return res.status(500).json({message : error});
    }
}