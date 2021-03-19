const inquirer = require("inquirer");
const connection = require("./connection.js");
const cTable = require("console.table");
const logo = require("asciiart-logo");
const config = require("./package.json");

let menu = async () =>
{   
    const menu = await inquirer.prompt(
        [{
            type: "list",
            message: "What would you like to do? ",
            name: "choice",
            choices: [
                'View all employees',
                'View all departments',
                'View all roles',
                'Add employee',
                'Update employee role',
                'Add department',
                'Add role',
                'Exit'
            ]
        }]);
    }