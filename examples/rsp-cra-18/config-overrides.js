const macros = require('unplugin-parcel-macros');

module.exports = function override(config) {
  config.plugins.unshift(macros.webpack());
  return config;
};
