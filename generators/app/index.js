const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Write app name',
      default: 'myApp',
    }, {
      type: 'input',
      name: 'desc',
      message: 'Write app description',
      default: 'My App Description',
    }]).then((answers) => {
      const { name, desc } = answers;
      this.log('name', name);
      this.log('description', desc);
      this.name = name;
      this.desc = desc;
    });
  }

  writing() {
    this.fs.copy(this.templatePath('config'), this.destinationPath('config'));
    this.fs.copy(this.templatePath('views'), this.destinationPath('views'));
    this.fs.copy(this.templatePath('app.js'), this.destinationPath('app.js'));
    this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
    this.fs.copy(this.templatePath('eslintrc'), this.destinationPath('.eslintrc'));
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('routes.js'), this.destinationPath('routes.js'));
    this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), {
      name: this.name,
      desc: this.desc,
    });

    mkdirp('controller');
    mkdirp('public');
    mkdirp('service');
    mkdirp('test');
  }

  install() {
    this.installDependencies({
      npm: true,
    });
  }
};

