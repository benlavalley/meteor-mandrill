Package.describe({
	summary: '[FIXED] Mandrill: Send templated email and more via Mandrill',
	name: 'semeano:mandrill',
	version: '1.0.3',
	git: 'https://github.com/semeano/meteor-mandrill',
	documentation: 'README.md',
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@1.8.1');
	api.use(['email', 'http'], ['server']);
	api.addFiles('mandrill.js', 'server');
	api.export('Mandrill');
});

Package.onTest(function (api) {
	api.use('tinytest');
	api.use('wylio:mandrill');
	api.addFiles('tests.js', 'server');
});
