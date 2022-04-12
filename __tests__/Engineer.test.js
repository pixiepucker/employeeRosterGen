const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('see if constructor returns github',()=>{
    const engineer = new Engineer('Dana','2','email2','tacocat');

    expect(engineer.github).toBe('tacocat');
});