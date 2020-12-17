const {env: {PORT}} = process
const express = require('express');
const bodyParser = require('body-parser');
const Mysql = require('./db')


const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// Routes
app.use(require("./routes/routes"))

// Database connection
Mysql.connect()
      .then(() => app.listen(PORT, () => console.log(`Server listening to port ${PORT}`)))
        .catch(error => console.error(`[ERROR] :: Server is not active :: ${error.message}`))


