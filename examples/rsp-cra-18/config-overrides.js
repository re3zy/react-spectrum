const macros = require('unplugin-parcel-macros');

module.exports = function override(config) {
  config.resolve.plugins = config.resolve.plugins.filter(
    plugin => plugin.constructor.name !== 'ModuleScopePlugin'
  );
  config.plugins.unshift(macros.webpack());
  return config;
};
