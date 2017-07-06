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
		reporters: ['spec', 'coverage'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS', 'PhantomJS_custom'],
		singleRun: false,
		concurrency: Infinity,
		customLaunchers: {
			'PhantomJS_custom': {
				base: 'PhantomJS',
				options: {
					windowName: 'my-window',
					settings: {
						webSecurityEnabled: false
					},
				},
				flags: ['--load-images=true'],
				debug: true
			}
		},
		phantomjsLauncher: {
			exitOnResourceError: true
		},
		preprocessors: {
			'src/components/**/*.js' : ['coverage'],
			'src/services/**/*.js': ['coverage']
		},
		coverageReporter: {
			type: 'html',
			dir: 'coverage/'
		}
	});
}
