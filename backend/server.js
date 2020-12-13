const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json());


const routes = require("./api/routes/routes");
routes(app);

const port = 5000;
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})

