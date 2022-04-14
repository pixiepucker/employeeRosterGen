const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('see if constructor returns office',()=>{
    const manager = new Manager('Layla', '3','email3','A01');

    expect(manager.office).toBe('A01');
});

test('see if method returns office',()=>{
    const manager = new Manager('Layla','3','email3','A01');

    expect(manager.getOffice()).toBe('A01');
});