var mysql = require('mysql');
const dataConnection = require('./config');

var connection = mysql.createConnection({
    host: dataConnection.database.host,
    user: dataConnection.database.user,
    password: dataConnection.database.password,
    database:dataConnection.database.database
});

connection.connect((err) => {
    if(err){
        console.log(err, 'Connection error');
        return
    }
    console.log('Connection SUCCESS');

})

module.exports = connection;