const mysql = require('mysql2')
const cTable = require('console.table')
const inquirer = require('inquirer')

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
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

continuePrompt = async () => {
    setTimeout(async function(){
        await inquirer.prompt([
            {
                type: 'confirm',
                name: 'continue',
                message: 'Do you have any other commands?'
            }
        ])
        .then(function (data) {  
            if (data.continue) {
                promptUser()
            } else {
                connection.end()
            }
        })
    }, 1000)
}

viewDepartments = async () => {
    connection.query('SELECT * FROM departments ORDER BY department_name', function(err,res){
        if (err) throw err
        var table = cTable.getTable(res)
        console.log(table)
    })

    setTimeout(async function(){
        if(action === 'view') {
            continuePrompt()
        }
    })
}