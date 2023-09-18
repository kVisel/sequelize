module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const controller = require('../controllers/postcontroller');
    const authorize = require('../middlewares/authmiddleware')

    router.post('/post', authorize ,controller.create);
    router.get('/posts',authorize, controller.getAll);

    app.use('/api', router);
}