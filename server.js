const mysql = require('mysql2')
const consoleTable = require('console.table')
const inquirer = require('inquirer')

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'daxburatto@gmail.com',
    password: 'NoSmoking97!',
    database: 'company'
})

connection.connect(err => {
    if (err) throw err
    console.log('connected as id ' + connection.threadId)
    connected()
})

connected = () => {
    promptUser()
}