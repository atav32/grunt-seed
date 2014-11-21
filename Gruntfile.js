module.exports = function(grunt) {

  // Load Grunt configs
  var path = require('path');
  require('load-grunt-config')(grunt, {
    configPath: path.resolve('grunt_modules'),
  });

};
