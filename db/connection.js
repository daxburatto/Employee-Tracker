const mysql = require('mysql2')
const Connection = require('mysql2/typings/mysql/lib/Connection')

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'NoSmoking97!',
    database: 'tracker_db'
})

connection.connect(err => {
    if (err) throw err
    console.log('Connected as id ' + connection.threadId)
})

module.exports = connection