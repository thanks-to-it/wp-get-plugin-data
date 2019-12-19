const fs = require("fs");
const lineReader = require('line-reader');

module.exports = (file, config = []) => new Promise(function (resolve, reject) {
	let fileContent = '';
	lineReader.eachLine(file, function (line, last) {
		fileContent += line
		if (line.includes('*/')) {
			resolve(fileContent, file);
			return false;
		} else {
			fileContent += '\n';
		}
	});
}).then((fileContent) => {
	//let originalRegex = fileContent.match(/(?<=\*\s?plugin Name\:).+$/igm	
	let infsToGet = [
		{name: 'name', pattern: 'Plugin Name'},
		{name: 'pluginURI', pattern: 'Plugin URI'},
		{name: 'version', pattern: 'Version'},
		{name: 'description', pattern: 'Description'},
		{name: 'author', pattern: 'Author'},
		{name: 'authorURI', pattern: 'Author URI'},
		{name: 'textDomain', pattern: 'Text Domain'},
		{name: 'domainPath', pattern: 'Domain Path'},
		{name: 'network', pattern: 'Network'},
		{name: 'requiresWP', pattern: 'Requires at least'},
		{name: 'requiresPHP', pattern: 'Requires PHP'},
		{name: '_sitewide', pattern: 'Site Wide Only'},
	];
	infsToGet = infsToGet.concat(config);
	infsToGet = infsToGet.map((inf) => {
		inf.regexResult = fileContent.match(new RegExp('(?<=\\*\\\s?' + inf.pattern + '\\:).+$', 'igm'));
		return inf;
	});
	let infs = infsToGet.map((inf) => ({[inf.name]: inf.regexResult ? inf.regexResult[0].trim() : ''})).reduce(((r, c) => Object.assign(r, c)), {});
	return infs;
});