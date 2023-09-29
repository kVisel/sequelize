module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const authorize = require('../middlewares/authmiddleware');
    const upload = require('../middlewares/multer');
    const controller = require('../controllers/profilcontroller')

    router.post('/profil', authorize, upload, controller.store);

    app.use('/api', router);
}