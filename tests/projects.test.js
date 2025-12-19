const assert = require('node:assert/strict');
const test = require('node:test');
const { projects } = require('../src/data/projects');

test('projects entries include required fields', () => {
  assert.ok(Array.isArray(projects));
  assert.ok(projects.length > 0);

  projects.forEach((project) => {
    assert.equal(typeof project.title, 'string');
    assert.ok(project.title.trim().length > 0);
    assert.equal(typeof project.description, 'string');
    assert.ok(project.description.trim().length > 0);
    assert.equal(typeof project.technologies, 'string');
    assert.ok(project.technologies.trim().length > 0);
  });
});
