module.exports = function(config) {
  config.set({

      files: [
        'src/app/app.spec.js',
        'node_modules/jquery/dist/jquery.min.js',
        'src/semantic/dist/semantic.min.js',
      ],

      frameworks: [
        'jasmine'
      ],

      browsers: ['PhantomJS'],

      preprocessors: {
        'src/app/app.spec.js': ['webpack']
      },

      webpack:{},

      webpackMiddleware: {
          noInfo: true
      }
  });
};
