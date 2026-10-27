const macros = require('unplugin-parcel-macros');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = function override(config) {
  config.resolve.plugins = config.resolve.plugins.filter(
    plugin => plugin.constructor.name !== 'ModuleScopePlugin'
  );
  config.plugins.unshift(macros.webpack());

  config.optimization.minimizer = config.optimization.minimizer.map(minimizer => {
    if (minimizer.constructor.name !== 'CssMinimizerPlugin') {
      return minimizer;
    }

    let options = {...minimizer.options};
    delete options.minimizer;

    return new CssMinimizerPlugin({
      ...options,
      minify: CssMinimizerPlugin.parcelCssMinify
    });
  });

  return config;
};
