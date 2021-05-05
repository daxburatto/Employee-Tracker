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
    setTimeout(async function(){
        if (action === 'add') {
            await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter Department name"
                }
            ]).then(function(data){
                connection.query("INSERT INTO departments (department_name) VALUES ('" + data.name + "')", function(err, res){
                    if (err) throw err
                    console.log('Department added')
                    var table = cTable.getTable(res)
                    console.log(table)
                })
            })
        }
    }, 999)
}

viewRoles = async () => {
    connection.query('SELECT roles.id, title, salary, departments.department_name AS DEPARTMENT FROM ROLES LEFT JOIN departments ON roles.department_id ORDER BY salary DESC', function (err, res) {  
        if (err) throw err
        var table = cTable.getTable(res)
        console.log(table)
    })

    setTimeout(async function () {  
        if (action === 'view') {
            continuePrompt()
        }
    })

    setTimeout(async function(){
        if (action === 'add') {
            await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Enter Role Title'
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Enter Role Salary'
                },
                {
                    type: 'list',
                    name: 'department',
                    message: 'Choose Department',
                    choices: ['Sales', 'Engineering', 'Legal', 'Finance', 'Executive']
                }
            ]).then(function (data) {  
                var departmentId = ''
                switch (data.deptartment) {
                    case "Sales":
                        departmentId = 1
                        break
                    case "Engineering":
                        departmentId = 2
                        break
                    case "Legal":
                        departmentId = 3
                        break
                    case "Finance":
                        departmentId = 4
                        break
                    case "Executive":
                        departmentId = 5
                        break
                }
                connection.query("INSERT INTO roles (title, salary, department_id) VALUES ('" + data.title + "', '" + data.salary + "', '" + departmentId + "')", function (err, res) {  
                    console.log("Role Added")
                    var table = cTable.getTable(res)
                    console.log(table)
                })
            })
            continuePrompt()
        }
    }, 999)
}

viewEmployees = async () => {
    connection.query('SELECT employees.id, first_name, last_name, roles.title, roles.salary, managers.name AS manager FROM employees LEFT JOIN roles ON employees.role.id = roles.id LEFT JOIN managers ON employees.manager_id = managers.id ORDER BY salary DESC', function (err, res) {  
        if (err) throw err
        var table = cTable.getTable(res)
        console.log(table)
    })
    setTimeout(async function(){
        if (action === "view") {
            continuePrompt()
        }
    })
    setTimeout(async function () {  
        if (action === "add") {
            await inquirer.prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'Enter Employee first name'
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'Enter Employee last name'
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'Select Employee Role',
                    choices: ['Salesman', 'Engineer', 'Lawyer', 'Financier', 'CEO']
                }
            ]).then(function (data) {  
                var roleId = ''
                switch (data.role) {
                    case "Salesman":
                        roleId = 1
                        break;
                    case "Engineer":
                        roleId = 2
                        break;
                    case 'Lawyer':
                        roleId = 3
                        break
                    case "Financier":
                        roleId = 4
                        break
                    case "CEO":
                        roleId = 5
                        break
                }
                connection.query("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('" + data.firstName + "', '" + data.lastName + "', '" + roleId + "', '" + managerId + "')", function (err, res) {  
                    if (err) throw err
                    console.log("Employee has been added")
                    var table = cTable.getTable(res)
                    console.log(table)
                })
            })
            continuePrompt()
        }
    }, 999)
    
}