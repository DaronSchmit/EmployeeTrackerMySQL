const inquirer = require("inquirer");
const connection = require("./connection.js");
const cTable = require("console.table");
const logo = require("asciiart-logo");
const config = require("./package.json");

const startInquirer = () => {
    inquirer
      .prompt({
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "Add Department",
          "Add Role",
          "Add Employee",
          "View All Departments",
          "View All Roles",
          "View all Employees",
          "Exit",
        ],
      })
    .then((res) => {
        switch(res.choice){
            case "Add Department":
                addDept();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "View All Departments":
                console.log(res.choice);
                break;
            case "View All Roles":
                console.log(res.choice);
                break;
            case "View All Employee":
                console.log(res.choice);
                break;
        }
    });
    }

const addDept =() => {
    inquirer
        .prompt([
            {
                name: "depName",
                type: "input",
                message: "What Department is this?"
            }
        ])
        .then((ans) => {
            connection.query(
                "INSERT INTO department SET ?",
                {dept_name: ans.depName}, (err, res) => {
                    if (err) {
                        console.log(`Something went wrong, please try again`);
                        startInquirer();
                    }
                    else{
                        console.log(`New Department ${ans.depName} added.`);
                        startInquirer();
                    }
                }
            )
        })
}
const addRole =() => {
    inquirer
        .prompt([
            {
                name: "roleName",
                type: "input",
                message: "What Role is this?"
            },
            {
                name: "salary",
                type: "number",
                message: "How much is this position paid?"
            },
            {
                name: "department_id",
                type: "number",
                message: "What Department number does this role fall under?"
            }
        ])
        .then((ans) => {
            connection.query(
                "INSERT INTO roles SET ?",
                {title: ans.roleName,
                salary: ans.salary,
                department_id: ans.department_id}, (err, res) => {
                    if (err) {
                        console.log(`Something went wrong, please try again`);
                        startInquirer();
                    }
                    else{
                        console.log(`New Role ${ans.roleName} added.`);
                        startInquirer();
                    }
                }
            )
        })
}

const addEmployee = () =>{
    inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "What is the Employees First Name?",
      },
      {
        name: "lastName",
        type: "input",
        message: "What is the employees Last Name?",
      },
      {
        name: "roleId",
        type: "number",
        message: "What is the role id number for this Employee?",
      },
      {
        name: "managerId",
        type: "number",
        message: "What is the Manager's ID number? Press Enter to skip if the employee has no manager",
      }
    ])
    .then((ans) => {
        let add;
        if (ans.managerId >= 0){
            add ={
                first_name: ans.firstName,
                last_name: ans.lastName,
                role_id: ans.roleId,
                manager_id: ans.managerId
            }
        }
        else{
            console.log("no manager selected");
            add ={
                first_name: ans.firstName,
                last_name: ans.lastName,
                role_id: ans.roleId
            }
        }
      connection.query(
        "INSERT INTO employee SET ?", add , (err, res) => {
            if(err){
                console.log(`There was an error, please try again`, err);
                startInquirer();
            }
            else{
                console.log(`Employee ${ans.firstName} was added`);
                startInquirer();
            }
        });
    });
}

startInquirer();