const helpers = require('yeoman-test');
const path = require('path');
const assert = require('yeoman-assert');

beforeEach(function () {
  return helpers.run(path.join(__dirname, '../generators/app'))
    .withPrompts({
      name: 'desc',
      type: 'desc',
    });
})

describe('r2generator', function () {
  it('generates a project with r2 services', function () {
    assert.file([
      'config/development.js',
      'config/production.js',
      'config/test.js',
      'views/layout.html',
      'app.js',
      '.editorconfig',
      '.eslintrc',
      '.gitignore',
      'package.json',
      'routes.js',
      // directories
      'model',
      'discriminator',
      'middleware',
      'controller',
      'public',
      'service',
      'test',
    ]);
  });
});
