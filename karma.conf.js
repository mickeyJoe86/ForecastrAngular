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
			// Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom) 
			exitOnResourceError: true
		}
	});
}
