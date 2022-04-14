const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/htmltemplate');

function Index() {
    this.manager;
    this.engineer;
    this.intern;
}

Index.prototype.managerPrompts = function(){
    //add some flare for users, let them know they're adding a manager
    console.log('=============');
    console.log('Add a Manager');
    console.log('=============');
    //prompts for adding manager
    inquirer
        .prompt({
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
        })
        //destructure name id email from prompt obj
        .then(({ name, id, email }) => {
            this.manager = new Manager(name,id,email);
            this.engIntPrompts();
        });
};

Index.prototype.engIntPrompts = function() {

}

new Index().managerPrompts();