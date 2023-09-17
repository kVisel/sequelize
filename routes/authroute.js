module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const auth = require('../controllers/authcontroller')

    router.post('/register', auth.register)
    router.post('/login', auth.login)

    app.use('/api', router)
}