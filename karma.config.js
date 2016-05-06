module.exports = function(config) {
    config.set({

        files: [
          'src/app/**/*.spec.js',
          'src/app/commons/**/*.spec.js'
        ],

        frameworks: [
          'jasmine',
        ],

        browsers: ['PhantomJS'],

        preprocessors: {
          'src/app/**/*.spec.js': ['webpack'],
          'src/app/commons/**/*.spec.js': ['webpack']
        },

        webpack: {},

        webpackMiddleware: {
            noInfo: true
        }
    });
};
