const mysql = require('mysql');
const { env: { DB_HOSTNAME, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } } = process

const Mysql = (() => {
    let connection = null

    const createConnection = () => {
        return new Promise((resolve, reject) => {
            connection = mysql.createConnection({
                host: DB_HOSTNAME,
                user: MYSQL_USER,
                password: MYSQL_PASSWORD,
                database: MYSQL_DATABASE
            });

            connection.connect(function (err) {
                if (err) {
                    console.error('error connecting: ' + err.stack);
                    reject(err);
                } else {
                    console.log('connected as id ' + connection.threadId);
                    console.log('Connection SUCCESS');
                    resolve(connection)
                }
            });
        })
    }

    return {
        connect: () => createConnection(),
        getInstance: async () => {
            if (!connection) {
                connection = await createConnection()
            }
            return connection
        }
    }
})()

module.exports = Mysql