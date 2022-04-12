const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('see if constructor returns string for name', ()=>{
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
});

test('see if constructor returns id', ()=>{
    const employee = new Employee('Dave','1');

    expect(employee.id).toBe('1');
});

test('see if constructor return email',()=>{
    const employee = new Employee('Dave', '1', 'email');

    expect(employee.email).toBe('email');
});

test('see if method gets name', ()=>{
    const employee = new Employee('Dave');

    expect(employee.getName()).toBe('Dave');
});