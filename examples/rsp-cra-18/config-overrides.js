const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const macros = require('unplugin-parcel-macros');

module.exports = function override(config) {
  config.plugins.unshift(macros.webpack());

  config.resolve.plugins = config.resolve.plugins.filter(
    plugin => !(plugin instanceof ModuleScopePlugin)
  );

  if (config.optimization?.minimizer) {
    config.optimization.minimizer = config.optimization.minimizer.map(minimizer => {
      return minimizer?.constructor?.name === 'CssMinimizerPlugin'
        ? new CssMinimizerPlugin({
            minify: CssMinimizerPlugin.parcelCssMinify
          })
        : minimizer;
    });
  }

  return config;
};
