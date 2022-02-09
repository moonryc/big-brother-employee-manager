const addDepartmentQuestions = [
    {
        message: "What is the new departments name?",
        type: "input",
        name: "name",
        validate: (input) => {
            if (input && input.length <31) {
                return true
            }
            console.log("Please enter a valid name less than 30 characters")
            return false
        }
    }
]

module.exports = {
    addDepartmentQuestions
}