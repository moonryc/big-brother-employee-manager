const inquirer = require("inquirer")

const questions =[
    {
        message:"What would you like to do?",
        type:"list",
        name:"choice",
        choices:[
            "View All Employees",
            "Add Employee",
            "Update  Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "EXIT"
        ]
    }
]

const userPromptMenu = (async () => {
  const {choice} = await inquirer.prompt(questions)

    switch(choice){
        case "View All Employees":
            break;
        case "Add Employee":
            break;
        case "Update  Employee Role":
            break;
        case "View All Roles":
            break;
        case "Add Role":
            break;
        case "View All Departments":
            break;
        case "Add Department":
            break;
        case "EXIT":
            break;
    }

})()