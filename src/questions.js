const addDepartmentQuestions = [
    {
        message: "What is the new departments name?",
        type: "input",
        name: "name",
        validate: (input) => {
            if (input) {
                return true
            }
            console.log("please enter a valid name")
            return false
        }
    }
]

const addEmployeeQuestions =[
    {
        message:"What is the Employees first name",
        name:"firstName",
        type:"input",
        validate:(input)=>{
            if(input){
                return true
            }
            console.log("Please enter a valid name")
            return false
        }
    },
    {
        message:"What is the Employees last name",
        name:"lastName",
        type:"input",
        validate:(input)=>{
            if(input){
                return true
            }
            console.log("Please enter a valid name")
            return false
        }
    },
    {
        message:"What is the Employees role id",
        name:"role_id",
        type:"input",
    },
    {
        message:"What is the Employees manager id",
        name:"manager_id",
        type:"input",
        validate:(input)=>{
            if(input){
                return true
            }
            console.log("Please enter a valid name")
            return false
        }
    }
]

const addRoleQuestions =[
    {
        message:"What is the Role title?",
        name:"title",
        type:"input",
        validate:(input)=>{
            if(input){
                return true
            }
            console.log("Please enter a valid name")
            return false
        }
    },
    {
        message:"What is the role's salary",
        name:"salary",
        type:"number",
    },
    {
        message: "what department Id",
        name:"department_id"
    }
]

module.exports = {
    addDepartmentQuestions, addEmployeeQuestions, addRoleQuestions
}