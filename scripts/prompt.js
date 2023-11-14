const inquirer = require('inquirer');
const queries = require('./queries');

function initialPrompt() {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
            name: 'choice'
        }
    ]);
};

function addEmployeePrompt() {
    return Promise.all([queries.getRoles(), queries.getManagers()]).then(([roleChoices, managerChoices]) => {
        return inquirer.prompt([
            {
                type: 'input',
                message: "What is the employee's first name?",
                name: 'firstName'
            },
            {
                type: 'input',
                message: "What is the employee's last name?",
                name: 'lastName'
            },
            {
                type: 'list',
                message: "What is the employee's role?",
                choices: roleChoices,
                name: 'roleTitle'
            },
            {
                type: 'list',
                message: "Who is the employee's manager?",
                choices: managerChoices,
                name: 'managerName'
            }
        ])
    })
}

module.exports = {
    initialPrompt,
    addEmployeePrompt
};