var webpack = require('webpack');
module.exports = {
  module: {
    loaders: [{
      test: require.resolve('snapsvg'),
      loader: 'imports-loader?this=>window,fix=>module.exports=0'
    }]
  }
};
