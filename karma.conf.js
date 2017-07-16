module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
			{ pattern: "src/**/*.ts" },
			{ pattern: "tests/**/*.spec.ts" }
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"],
        },
		reporters: ["spec", "karma-typescript"],
        browsers: ["Chrome"]
    });
};
