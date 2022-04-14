const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('see if constructor returns github',()=>{
    const engineer = new Engineer('Dana','2','email2','tacocat');

    expect(engineer.github).toBe('tacocat');
});

test('see if method returns engineer as role', ()=>{
    const engineer = new Engineer('Dana', '2', 'email2','tacocat');

    expect(engineer.getRole()).toBe('Engineer');
});