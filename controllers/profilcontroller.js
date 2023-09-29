const db = require('../models/index');
const Profil = db.profil;

exports.store = async (req, res) => {
    try {
        const userId = req.id.id;
        const profil = await Profil.create({
            image:req.file.originalname,
            userId:userId
        });

        return res.status(200).json({
            message: "Photo ajoute",
            data: profil
        })
    } catch (error) {
        return res.status(500).json({message: error})
    }
}