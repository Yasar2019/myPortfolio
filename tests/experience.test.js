const assert = require('node:assert/strict');
const test = require('node:test');
const { experiences } = require('../src/data/experience');

test('experience entries include required fields', () => {
  assert.ok(Array.isArray(experiences));
  assert.ok(experiences.length > 0);

  experiences.forEach((experience) => {
    assert.equal(typeof experience.company, 'string');
    assert.ok(experience.company.trim().length > 0);
    assert.equal(typeof experience.role, 'string');
    assert.ok(experience.role.trim().length > 0);
    assert.equal(typeof experience.period, 'string');
    assert.ok(experience.period.trim().length > 0);
    assert.equal(typeof experience.responsibilities, 'string');
    assert.ok(experience.responsibilities.trim().length > 0);
  });
});
