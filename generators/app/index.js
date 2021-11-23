'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Your project name',
      store: true,
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project description',
      store: true,
    }]);
  }

  writing() {
    this.fs.copy(
      this.templatePath('_tsconfig.json'),
      this.destinationPath('tsconfig.json')
    );

    this.fs.copy(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );

    this.fs.copy(
      this.templatePath('_app.ts'),
      this.destinationPath('src/app.ts')
    );

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {'description': this.answers.description, 'name': this.answers.name}
    );
  }

  install() {
    this.npmInstall();
  }

  end() {
    this.log(chalk.green('------------'));
    this.log(chalk.blue('Your project has been created!'));
    this.log(chalk.green('------------'));
  }
};
