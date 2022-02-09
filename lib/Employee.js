const Company = require('./Company')
const inquirer = require("inquirer");
const Roles = require('./Roles')

class Employee extends Company {

    constructor() {
        super();
        this.db = super.db
    }

    static getAll = async function () {
        try {
            const sql = `SELECT e.id,
                                e.first_name,
                                e.last_name,
                                role.title  AS                         role_title,
                                role.salary AS                         salary,
                                CONCAT(m.first_name, ' ', m.last_name) 'manager_title',
                                department.name
                         FROM employee e
                                  LEFT JOIN role ON e.role_id = role.id
                                  LEFT JOIN department ON department.id = role.department_id
                                  LEFT JOIN employee m
                                            ON (e.manager_id = m.id)`
            return (await (await this.db).query(sql))[0]
        } catch (e) {
            console.log("================")
            console.log(e)
            console.log("================")
        }
    }

    static addNew = async function () {
        try {
            const addEmployeeQuestions = [
                {
                    message: "What is the Employees first name",
                    name: "firstName",
                    type: "input",
                    validate: (input) => {
                        if (input && input.length <31) {
                            return true
                        }
                        console.log("Please enter a valid name less than 30 characters")
                        return false
                    }
                },
                {
                    message: "What is the Employees last name",
                    name: "lastName",
                    type: "input",
                    validate: (input) => {

                        if (input && input.length <31) {
                            return true
                        }
                        console.log("Please enter a valid name less than 30 characters")
                        return false
                    }
                },
                {
                    message: "What is the Employees role?",
                    name: "role_id",
                    type: "list",
                    choices: (await Roles.getAll()).map(item => {
                        return {name: item.title, value: item.id}
                    }),
                },
                {
                    message: "What is the Employees manager id",
                    name: "manager_id",
                    type: "list",
                    choices: (await Employee.getAll()).map(item => {
                        return {name: item.first_name + " " + item.last_name, value: item.id}
                    }),
                }
            ]
            const {firstName, lastName, role_id, manager_id} = await inquirer.prompt(addEmployeeQuestions)
            const params = [firstName, lastName, role_id, manager_id]

            const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                         VALUES (?, ?, ?, ?)`
            const response = (await (await this.db).query(sql, params))
            console.log(`Successfully added Employee ${firstName} ${lastName}`)
        } catch (e) {
            console.log("================")
            console.log(e)
            console.log("================")
        }
    }

    static updateEmployeeRole = async function () {
        let employeeFirstName;
        let employeeLastName;
        try {
            const updateEmployeeQuestions = [
                {
                    message: "Which employee would you like to change the role of?",
                    type: "list",
                    name: "employee",
                    choices: (await Employee.getAll()).map(item => {
                        return {name: item.first_name + " " + item.last_name, value: item.id}
                    }),
                },
                {
                    message: async ({employee}) => {
                        let selectedEmployee

                        (await Employee.getAll()).map(item => {
                            if (employee === item.id) {
                                selectedEmployee = item
                                employeeFirstName = selectedEmployee.first_name
                                employeeLastName = selectedEmployee.last_name
                            }
                        })
                        return `What new role would you like to assign to ${selectedEmployee.first_name} ${selectedEmployee.last_name}`
                    },
                    type: "list",
                    name: "role",
                    choices: (await Roles.getAll()).map(item => {
                        return {name: item.title, value: item.id}
                    }),
                }
            ]
            const {employee, role} = await inquirer.prompt(updateEmployeeQuestions)
            const params = [role, employee]
            const sql = `UPDATE employee
                         SET role_id=?
                         WHERE id = ?`
            const response = (await (await this.db).query(sql, params))
            console.log(`Successfully Updated Employee ${employeeFirstName} ${employeeLastName}`)
        } catch (e) {
            console.log("================")
            console.log(e)
            console.log("================")
        }
    }

}

module.exports = Employee