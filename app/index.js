'use strict';
//Require dependencies
var Generator = require('yeoman-generator');


module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.log('Initializing...');
    }

    init() {
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('index.html')
        );
        this.fs.copyTpl(
            this.templatePath('index.css'),
            this.destinationPath('index.css')
        );
        this.fs.copyTpl(
            this.templatePath('index.js'),
            this.destinationPath('index.js')
        );
    }
};
