const inquirer = require("inquirer")
const Employee = require('../lib/Employee')
const Roles = require('../lib/Roles')
const Department = require('../lib/Department')
const cTable = require('console.table')

const questions = [
    {
        message: "What would you like to do?",
        type: "list",
        name: "choice",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role",
            "EXIT"
        ],
        loop: false
    }
]

const userPromptMenu = async () => {
    let userChoice;

    try {
        const {choice} = await inquirer.prompt(questions)
        userChoice = choice
    } catch (e) {
        console.log("===================")
        console.log(e)
        console.log("===================")
    }



    try {
        switch (userChoice) {
            case "View All Employees":
                console.log(cTable.getTable(await Employee.getAll()))
                break;
            case "Add Employee":
                await Employee.addNew()
                break;
            case "Update Employee Role":
                await Employee.updateEmployeeRole()
                break;
            case "View All Roles":
                console.log(cTable.getTable(await Roles.getAll()))
                break;
            case "Add Role":
                await Roles.addNew()
                break;
            case "View All Departments":
                console.log(cTable.getTable(await Department.getAll()))
                break;
            case "Add Department":
                await Department.addNew()
                break;
            case "EXIT":
                process.exit(1)
                break;
        }
    } catch (e) {
        console.log("===================")
        console.log(e)
        console.log("===================")
    }



    await userPromptMenu()
}


module.exports = userPromptMenu