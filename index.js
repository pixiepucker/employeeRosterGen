const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const inquirer = require('inquirer');
const fs = require('fs');
const templateHTML = require('./src/htmltemplate');

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
//function that will prompt user to select which employee type they'd like to add next
//engineer or intern?? hmm
const getRoles = function() {
    //add flair
    console.log('===============');
    console.log('Add Team Member');
    console.log('===============');

    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'confirmNew',
                message: 'Would you like to add a team member?',
                default: false
            }
        ])
        .then(function(res) {
            if (res.confirmNew === true ) {
                //run function to add an engineer OR intern
                addEngInt();
            } else {
                //let user know that they're done
                console.log('Finito!');
                //write file
                fs.generateHTML(employees);
            }
        })
};

//function to write file/generate HTML
function generateHTML(employees) {
    console.log(`You're all done! Check your dist folder for you final product :) !`);
}

//have function that gets the ball rolling! (calls 1st function)
function start() {
    console.log("Hi, let's get started :)");
    managerPrompts();
};

start();