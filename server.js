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

promptUser = async() => {
    action = ''
    await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Welcome to Employee Tracker, select an option to continue.',
            choices: ["View Departments", "View Roles", "View All Employees"]
        }
    ])
    .then(function(data){
        switch (data.action) {
            case "View Departments":
                action: 'view'
                viewDepartments();
            break
            case "View Roles":
                action: 'view'
                viewRoles()
            break
            case "View All Employees":
                action: 'view'
                viewEmployees()
            break
        }
    })
}