'use strict';

module.exports = function (grunt) {

	require ('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: require('./package.json'),
		bower: require('./bower.json'),
		meta: {
			banner: '/**\n' +
			' * <%= pkg.name %>\n' +
			' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
			' * @link <%= pkg.homepage %>\n' +
			' * @author <%= pkg.author.name %> (<%= pkg.author.email %>)\n' +
			' * @license MIT License, http://www.opensource.org/licenses/MIT\n' +
			' */\n'
		}
	});

};