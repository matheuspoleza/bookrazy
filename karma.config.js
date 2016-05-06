module.exports = function(config) {
    config.set({

        files: ['src/app/app.spec.js'],

        frameworks: [
          'jasmine',
        ],

        browsers: ['PhantomJS'],

        preprocessors: {
          'src/app/app.spec.js': ['webpack']
        },

        webpack: {},

        webpackMiddleware: {
            noInfo: true
        }
    });
};
