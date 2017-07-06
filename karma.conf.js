module.exports = function (config) {
	config.set({

		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'./node_modules/angular/angular.js',
			'./node_modules/angular-ui-router/release/angular-ui-router.js',
			'./node_modules/angular-mocks/angular-mocks.js',
			'./src/**/*.js',
			'./tests/**/*.spec.js'
		],
		exclude: [
		],
		preprocessors: {
		},
		reporters: ['spec'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false,
		concurrency: Infinity,
		customLaunchers: {
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
		}
	});

	if (process.env.TRAVIS) {
		config.browsers = ['Chrome_travis_ci'];
	}

	config.set(config);
}


