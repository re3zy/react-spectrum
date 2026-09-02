const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const macros = require('unplugin-parcel-macros');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function override(config) {
  config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));
  config.plugins.push(macros.webpack());

  if (config.optimization?.minimizer) {
    config.optimization.minimizer = config.optimization.minimizer.map(minimizer => {
      if (minimizer?.constructor?.name === 'CssMinimizerPlugin') {
        return new CssMinimizerPlugin({
          minify: CssMinimizerPlugin.parcelCssMinify
        });
      }

      return minimizer;
    });
  }

  return config;
};
