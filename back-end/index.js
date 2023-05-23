const express = require('express');
require("dotenv").config();
const morganBody = require("morgan-body")
const morgan = require('morgan')
const cors = require('cors')
var app = express();
const db = require("./src/models");
const routes = require('./src/routes');
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // Activation de x-wwww-form-urlencoded   


//Configuring express server
morganBody(app, {logAllReqHeader:true, maxBodyLength:5000});
app.use(cors(corsOptions))                                 // Activation de CORS
app.use(morgan('tiny'))                         // Activation de Morgan
var corsOptions = {
   origin: "http://localhost:3000"
 };
app.use('/', routes)
app.use
/*db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
*/
//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));