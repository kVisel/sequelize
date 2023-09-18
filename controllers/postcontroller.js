const db = require('../models/index');
const Post = db.Post;


exports.create = async (req, res) => {
    try {
        const {name, title, description } = req.body;
        const post = await Post.create({
            name,title,description
        })
        return res.status(200).json({
            message: "Post ajoute",
            data: post
        })
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

exports.getAll = async (req, res) => {
    try {
        const posts = await Post.findAll();
        return res.status(200).json({
            message: "tous les post recupere",
            data: posts
        })
    } catch (error) {
        return res.status(500).json({message: error})
    }
}


