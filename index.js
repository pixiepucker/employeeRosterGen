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
            //run function to see if user wants to add new team member
            getRoles();
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
                generateHTML(employees);
            }
        })
};

//add engineer or intern function
function addEngInt () {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Is your new member an Engineer or an Intern?',
                choices: ['Engineer', 'Intern']
            }
        ])
        .then(function(res) {
            //use switch case to select between choices
            switch (res.role) {
                case 'Engineer':
                    inquirer
                        .prompt([
                            //eng name input
                            {
                                type: 'input',
                                name: 'name',
                                message: "Please enter your Engineer's name: (Required)",
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        console.log("Please enter the Engineer's name!");
                                        return false;
                                    }
                                }
                            },
                            //eng id input
                            {
                                type: 'input',
                                name: 'id',
                                message: "Please enter your Engineer's ID: (Required)",
                                validate: idInput => {
                                    if (idInput) {
                                        return true;
                                    } else {
                                        console.log("Please enter the Engineer's ID!");
                                        return false;
                                    }
                                }
                            },
                            //eng email input
                            {
                                type: 'input',
                                name: 'email',
                                message: "Please enter your Engineer's email: (Required)",
                                validate: emailInput => {
                                    if (emailInput) {
                                        return true;
                                    } else {
                                        console.log("Please enter the Engineer's email!");
                                        return false;
                                    }
                                }
                            },
                            //eng github input
                            {
                                type: 'input',
                                name: 'github',
                                message: "Please enter your Engineer's GitHub: (Required)",
                                validate: githubInput => {
                                    if (githubInput) {
                                        return true;
                                    } else {
                                        console.log("Please enter the Engineer's GitHub!");
                                        return false;
                                    }
                                }
                            }
                        ])
                        .then(function(res) {
                            //save new Engineer
                            const engineer = new Engineer(res.name, res.id, res.email, res.github);
                            //check input
                            console.log(engineer);
                            employees.push(engineer);
                        })
                        .then(function() {
                            //run getRoles() to check if user needs to add new team member
                            getRoles();
                        });
                        break;
                case 'Intern':
                    inquirer
                        .prompt([
                            //name input
                            {
                                type: 'input',
                                name: 'name',
                                message: "Please enter your Intern's name: (Required)",
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        console.log("Please enter the Intern's name!");
                                        return false;
                                    }
                                }
                            },
                                    //id input
                            {
                                type: 'input',
                                name: 'id',
                                message: "Please enter your Intern's ID: (Required)",
                                validate: idInput => {
                                    if (idInput) {
                                        return true;
                                    } else {
                                        console.log("Please enter the Intern's ID!");
                                        return false;
                                    }
                                }
                            },
                            //email input
                            {
                                type: 'input',
                                name: 'email',
                                message: "Please enter your Intern's email: (Required)",
                                validate: emailInput => {
                                    if (emailInput) {
                                        return true;
                                    } else {
                                        console.log("Please enter the Intern's email!");
                                        return false;
                                    }
                                }
                            },
                            //school input
                            {
                                type: 'input',
                                name: 'school',
                                message: "Please enter your Intern's school: (Required)",
                                validate: schoolInput => {
                                    if (schoolInput) {
                                        return true;
                                    } else {
                                        console.log("Please enter the Intern's school information!");
                                        return false;
                                    }
                                }
                            }
                            ])
                        .then(function(res) {
                            //save new intern
                            const intern = new Intern(res.name, res.id, res.email, res.school);
                            //check input
                            console.log(intern);
                                //push to employee arr
                            employees.push(intern);
                            //check arr
                            console.log("Here's your team so far!");
                            console.log(employees);
                        })
                        .then(function() {
                            //rerun getRoles();
                            getRoles();
                        });
                        break;
        }
    })
};
//function to write file/generate HTML
function generateHTML(employees) {
    console.log(`Check your dist folder for you final product :) !`);
};

//have function that gets the ball rolling! (calls 1st function)
function start() {
    console.log("Hi, let's get started :)");
    managerPrompts();
};

start();