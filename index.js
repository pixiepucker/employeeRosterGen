const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/htmltemplate');
const { conditionalExpression } = require('@babel/types');

//create array to hold employee 'list'
const employees = [];

const managerPrompts = function() {
    //add some flare for users, let them know they're adding a manager
    console.log('=============');
    console.log('Add a Manager');
    console.log('=============');
    //prompts for adding manager
    inquirer
        .prompt([{
            //name prompt
            type: 'text',
            name: 'name',
            message: "Please enter manager's name: (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter manager's name!");
                    return false;
                }
            }
        },
        {
            //id prompt
            type: 'text',
            name: 'id',
            message: "Please enter manager's ID: (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter manager's ID!");
                    return false;
                }
            }
        },
        {
            //email prompt
            type: 'text',
            name: 'email',
            message: "Please enter manager's email: (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter manager's email!");
                    return false;
                }
            }
        },
        {
            //office # prompt
            type: 'text',
            name: 'office',
            message: "Please enter manager's office number: (Required)",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter manager's office number!");
                    return false;
                }
            }
        }])
        .then((res) => {
            //save response to new Manager! then push into employees arr
            const manager = new Manager(res.name, res.id, res.email, res.office)
            employees.push(manager);
            //check arr
            console.log(employees);
        })
        .then(()=>{
            this.getRoles();
        })
        .catch(err=> {
            console.log(err);
        });
};

const getRoles = function() {

};

//have function that gets the ball rolling! (calls 1st function)
function start() {
    console.log("Hi, let's get started :)");
    managerPrompts();
};

start();