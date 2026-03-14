const assert = require('node:assert/strict');
const test = require('node:test');
const { skills } = require('../src/data/skills');

test('skills entries include required fields', () => {
  assert.ok(Array.isArray(skills));
  assert.ok(skills.length > 0);

  skills.forEach((skill) => {
    assert.equal(typeof skill.name, 'string');
    assert.ok(skill.name.trim().length > 0);
    assert.equal(typeof skill.level, 'number');
    assert.ok(skill.level >= 0 && skill.level <= 100);
  });
});
