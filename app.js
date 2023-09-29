const express = require('express')
const app = express();
const db  = require('./models/index')

app.use(express.urlencoded({extended: false}));
app.use(express.json());


db.sequelize.sync({alert: true})
.then(() => console.log("connexion successsfully"))
.catch((error) => console.log("something went wrong " + error));

require('./routes/authroute')(app)
require('./routes/postroutes')(app)
require('./routes/profilroute')(app)

module.exports = app;