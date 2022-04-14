const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('see if constructor returns school',()=> {
    const intern = new Intern('Sam', '4','email4','MIT');

    expect(intern.school).toBe('MIT');
});

test('see if getRole returns role',()=>{
    const intern = new Intern('Sam', '4', 'email4','MIT');

    expect(intern.getRole()).toBe('Intern');
});